import { useContext, useMemo } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactionsBySummary } = useContext(TransactionContext)

  const summary = useMemo(() => {
    return transactionsBySummary.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactionsBySummary])
  return summary
}
