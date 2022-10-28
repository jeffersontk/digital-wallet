import React from 'react'
import { Label, RadioInput } from './styles'

interface RadioProps {
  name: string,
  value: string,
}

export function Radio({name, value}:RadioProps) {
  return (
    <>
      <RadioInput type="radio" id={value} name={name} value={value}/>
      <Label htmlFor={value}>{value}</Label>
    </>
  )
}
