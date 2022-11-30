import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: showUpDesktop 0.3s ease;

  @media (max-width: 600px) {
    top: calc(100% - 270px);
    padding-left: 5rem;
    padding-right: 5rem;
    animation: showUp 0.3s ease;
  }

  @keyframes showUp {
    from {
      top: 200%;
    }
    to {
      top: 70%;
    }
  }
  @keyframes showUpDesktop {
    from {
      top: 200%;
    }
    to {
      top: 50%;
    }
  }

  form {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    select {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;
      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }

    /*   @media (max-width: 600px){
      padding-left: 3rem;
      padding-right: 3rem;
    } */
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  @media (max-width: 600px) {
    right: 5rem;
  }
`

export const TransactionsType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionsButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionsButton = styled(
  RadioGroup.Item,
)<TransactionsButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transform: background-color 0.2s;
    background: ${(props) => props.theme['gray-600']};

    svg {
      animation: boingDown 0.5s ease-in-out;
    }
    @keyframes boingDown {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(4px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    transform: background-color 0.2s, color 0.2s;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
  &[data-state='checked']:hover {
    svg {
      animation: boingUp 0.5s ease-in-out;
    }

    @keyframes boingUp {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-4px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`
