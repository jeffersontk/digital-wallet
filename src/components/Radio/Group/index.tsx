import React from 'react'
import { Radio } from '..'
import { RadioGroupContainer } from './styles'

interface RadioGroupProps {
  RadioListItem: any[]
}
export default function RadioGroup({ RadioListItem }: RadioGroupProps) {
  return (
    <RadioGroupContainer>
      {RadioListItem &&
        RadioListItem.map((item) => (
          <Radio name="month" key={item.monthNumber} value={item.monthName} />
        ))}
    </RadioGroupContainer>
  )
}
