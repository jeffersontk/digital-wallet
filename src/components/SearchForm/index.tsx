import { SearchFormContainer } from "./styled";
import {FiSearch} from 'react-icons/fi'
import { useForm } from "react-hook-form";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export default function SearchForm() {
  
  const {fetchTransactions} = useContext(TransactionContext)

  const {
    register, 
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Buscar por transações"
        {...register('query')}
      />
      
      <button type="submit" disabled={isSubmitting}>
        Buscar
        <FiSearch />
      </button>
    </SearchFormContainer>
  )
}
