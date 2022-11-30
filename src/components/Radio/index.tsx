
import * as RadioGroup from '@radix-ui/react-radio-group';
import React from 'react'
import { Label, RadioButtonMouthFilter, RadioInput } from './styles'

interface RadioProps {
  name: string,
  value: string,
}

export function Radio({name, value}:RadioProps) {
  return (
    <>
      <RadioButtonMouthFilter value={value}>
        {value}
      </RadioButtonMouthFilter>
    </>
  )
}
