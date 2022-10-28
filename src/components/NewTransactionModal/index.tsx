import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay, TransactionsButton, TransactionsType } from './styles';
import { AiOutlineClose } from 'react-icons/ai'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
    <Overlay />
    <Content>
      <Dialog.Title>Nova Transação</Dialog.Title>
      <Close>
        <AiOutlineClose size={24} />
      </Close>

      <form>
        <input type="text" placeholder="Descrição" required />
        <input type="Number" placeholder="Preço" required />
        <select>
          <option value="fixo">Fixo</option>
          <option value="variado">Variado</option>
        </select>
        <input type="text" placeholder="Categoria" required />

        <TransactionsType>
          <TransactionsButton variant='income' value='income'>
            Entrada 
            <FiArrowUpCircle size={24}/>
          </TransactionsButton>
          <TransactionsButton variant='outcome' value='outcome'>
            Saida
            <FiArrowDownCircle size={24}/>
          </TransactionsButton>
        </TransactionsType>

        <button type="submit">Cadastrar</button>
      </form>
    </Content>
  </Dialog.Portal>
  )
}
