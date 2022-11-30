import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const CustomTabsList = styled(Tabs.List)`
  display: flex;
  flex-shrink: 0;
`
export const CustomTabsTrigger = styled(Tabs.Trigger)`
  all: unset;
  font-family: inherit;
  background-color: ${(props) => props.theme['gray-900']};
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;
  color: ${(props) => props.theme.white};
  user-select: none;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 6px;
  }
  &:last-child {
    border-top-right-radius: 6px;
  }
  &:hover {
    color: ${(props) => props.theme['gray-100']};
  }
  &[data-state='active'] {
    background-color: ${(props) => props.theme['green-700']};
  }
  &:focus {
    position: relative;
    background-color: ${(props) => props.theme['green-500']};
  }
`
