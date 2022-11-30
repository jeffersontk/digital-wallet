import { SummaryCard, SummaryContainer } from './styles'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const { income, total, outcome } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard variant="positive">
        <header>
          <span>Saldo atual</span>
          <BsCurrencyDollar color="#fff" size={32} />
        </header>

        <strong>{priceFormatter.format(total)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Total de entrada</span>
          <FiArrowUpCircle color="#00b37e" size={32} />
        </header>

        <strong>{priceFormatter.format(income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Total de saídas</span>
          <FiArrowDownCircle color="#f75a68" size={32} />
        </header>

        <strong>{priceFormatter.format(outcome)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
