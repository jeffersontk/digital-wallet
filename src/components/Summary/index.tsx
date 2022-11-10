import React from 'react'
import { SummaryCard, SummaryContainer } from './styles'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard variant='positive'>
        <header>
          <span>Saldo atual</span>
          <BsCurrencyDollar color='#fff' size={32}/>
        </header>

        <strong>R$ 1000 </strong>
      </SummaryCard >
      <SummaryCard >
        <header>
          <span>Total de entrada</span>
          <FiArrowUpCircle color='#00b37e' size={32}/>
        </header>

        <strong>R$ 4000</strong>
      </SummaryCard >
      <SummaryCard >
        <header>
          <span>Total de saídas</span>
          <FiArrowDownCircle color='#f75a68' size={32}/>
        </header>

        <strong>R$ 3000</strong>
      </SummaryCard >
    </SummaryContainer>
  )
}
