import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  typeOfExpense: 'income' | 'fixed' | 'variable';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[],
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  async function fetchTransactions(query?: string) {
    const response = await api.get(`/transactions`, {
      params: {
        q: query
      }
    })

    setTransactions(response.data)
  }

  useEffect(()=> {
    fetchTransactions()
  },[])
  
  return(
    <TransactionContext.Provider value={{transactions, fetchTransactions}}>
      {children}
    </TransactionContext.Provider>
  )
}