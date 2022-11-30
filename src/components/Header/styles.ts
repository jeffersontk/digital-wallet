import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 7.5rem;

  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0 5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  span {
    font-size: 1.75rem;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    span {
      font-size: 1rem;
      font-weight: bold;
    }
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }

  @media (max-width: 600px) {
    padding: 0 0.75rem;
  }
`
