import React from 'react'
import { Transaction } from '../../pages/Transactions'
import { PriceHighlight, TransactionsTable } from './styles'

interface tableProps {
  transactions: Transaction[]
}
export default function Table({transactions}:tableProps) {
  return (
    <TransactionsTable>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td width="50%">
            {transaction.description}
            </td>
            <td>
              <PriceHighlight variant={transaction.type}>
                {transaction.price}
              </PriceHighlight> 
            </td>
            <td>
              {transaction.category}
            </td>
            <td>{transaction.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </TransactionsTable>
  )
}
