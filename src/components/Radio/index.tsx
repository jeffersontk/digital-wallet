import { RadioButtonMouthFilter } from './styles'

interface RadioProps {
  name: string
  value: string
}

export function Radio({ name, value }: RadioProps) {
  return (
    <>
      <RadioButtonMouthFilter value={value}>{value}</RadioButtonMouthFilter>
    </>
  )
}
