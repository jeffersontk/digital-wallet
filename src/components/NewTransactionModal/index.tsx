import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay, TransactionsButton, TransactionsType } from './styles';
import { AiOutlineClose } from 'react-icons/ai'
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi'
import { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
  typeVariableOutcome: z.enum(['fixed', 'variable']).optional()
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    control,
    register, 
    handleSubmit,
    formState: {
      isSubmitting
    },
    watch
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues:{
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('data', data)
  }

  const type = watch('type')

  return (
    <Dialog.Portal>
    <Overlay />
    <Content>
      <Dialog.Title>Nova Transação</Dialog.Title>
      <Close>
        <AiOutlineClose size={24} />
      </Close>

      <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <input 
          type="text" 
          placeholder="Descrição" 
          required
          {...register('description')}
        />
        <input 
          type="Number" 
          placeholder="Preço" 
          required
          {...register('price', { valueAsNumber: true})}
        />
    
        <input 
          type="text" 
          placeholder="Categoria" 
          required
          {...register('category')}
        />

        <Controller 
          control={control}
          name="type"
          render={({field})=> {
            return (
              <TransactionsType 
                onValueChange={field.onChange} 
                value={field.value}
              >
                <TransactionsButton 
                  variant='income' 
                  value='income' 
                >
                  Entrada 
                  <FiArrowUpCircle size={24}/>
                </TransactionsButton>
                <TransactionsButton 
                  variant='outcome' 
                  value='outcome' 
                >
                  Saida
                  <FiArrowDownCircle size={24}/>
                </TransactionsButton>
              </TransactionsType>
            )
          }}
        />
        {
          type === 'outcome' && 
          <select {...register("typeVariableOutcome")}>
            <option value="fixed">Fixo</option>
            <option value="variable">Variado</option>
          </select>
        }
        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
      </form>
    </Content>
  </Dialog.Portal>
  )
}
