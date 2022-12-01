import { Card, CardContainer, PriceHighlight } from './styled'
import { CgPentagonRight } from 'react-icons/cg'
import { HiOutlineCalendar } from 'react-icons/hi'
import { Transaction } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

interface TransactionsCardProps {
  transactions: Transaction[]
}

export default function TransactionCard({
  transactions,
}: TransactionsCardProps) {
  return (
    <CardContainer>
      {transactions.map((transaction) => (
        <Card key={transaction.id}>
          <h4>{transaction.description}</h4>
          <PriceHighlight variant={transaction.type}>
            {transaction.type === 'outcome' && '- '}
            {priceFormatter.format(transaction.price)}
          </PriceHighlight>

          <div>
            <span>
              <CgPentagonRight size={24} />
              {transaction.category}
            </span>
            <span>
              <HiOutlineCalendar size={24} />
              {dateFormatter.format(new Date(transaction.createdAt))}
            </span>
          </div>
        </Card>
      ))}
    </CardContainer>
  )
}
