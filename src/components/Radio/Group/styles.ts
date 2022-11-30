import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.75rem;

  @media (max-width: 600px) {
    overflow-x: scroll;
  }
`
