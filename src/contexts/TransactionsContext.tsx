import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  typeOfExpense: 'income' | 'fixed' | 'variable'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInputs {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  typeVariableOutcome?: 'fixed' | 'variable'
}

interface TransactionContextType {
  transactions: Transaction[]
  transactionsBySummary: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputs) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [transactionsBySummary, setTransactionsBySummary] = useState<
    Transaction[]
  >([])

  async function fetchTransactions(query?: string) {
    const response = await api.get(`/transactions`, {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function fetchTransactionsBySummary(query?: string) {
    const response = await api.get(`/transactions`)

    setTransactionsBySummary(response.data)
  }

  async function createTransaction(data: CreateTransactionInputs) {
    const { category, description, price, type, typeVariableOutcome } = data

    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      typeVariableOutcome,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])

    setTransactionsBySummary((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
    fetchTransactionsBySummary()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        transactionsBySummary,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
