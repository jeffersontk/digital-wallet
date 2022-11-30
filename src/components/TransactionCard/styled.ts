import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
`

export const Card = styled.div`
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.75rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-300']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['gray-500']};
      display: flex;
      align-items: center;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.h3<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
