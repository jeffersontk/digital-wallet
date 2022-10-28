import { HeaderContainer, HeaderContent, NewTransactionButton, HeaderLogo } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/wallet-logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logoImg} alt="" />
          <span>Control Wallet</span>
        </HeaderLogo>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
