import {useContext, useEffect} from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import { Header } from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import Table from '../../components/Table';
import TransactionCard from '../../components/TransactionCard';
import useMediaQuery from '../../hooks/useMediaQuery';
import { monthList } from "../../utils/monthList";
import { CustomTabsList, CustomTabsTrigger, TransactionsContainer } from "./styles";
import { TransactionContext } from '../../contexts/TransactionsContext';
import { RadioGroupContainer } from '../../components/Radio/Group/styles';
import { Radio } from '../../components/Radio';
import {Controller, useForm } from "react-hook-form";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const searchFormMonthSchema = z.object({
  month: z.enum(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Des'])
})

export type SearchFormMonthInputs = z.infer<typeof searchFormMonthSchema>;

export function Transactions() {
  const matches = useMediaQuery('(min-width: 768px)')
  const {transactions} = useContext(TransactionContext)

  const {
    control,
    watch
  } = useForm<SearchFormMonthInputs>({
    resolver: zodResolver(searchFormMonthSchema),
  })

  const currentMonthSelect = watch('month')

  useEffect(()=>{
    if(currentMonthSelect){
      console.log('currentMonthSelect', currentMonthSelect)
    }
  },[currentMonthSelect])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <Controller
          control={control}
          name="month"
          render={({field})=>{
            return(
              <RadioGroupContainer
                onValueChange={field.onChange} 
                value={field.value}
              >
                { 
                  monthList &&
                  monthList.map((item)=> (
                    <Radio name='month' key={item.monthNumber} value={item.monthName} />
                  ))
                }
              </RadioGroupContainer>
            )
          }}
        />
        <Tabs.Root defaultValue="tab1">
          <CustomTabsList aria-label="Tipo de gastos">
            <CustomTabsTrigger value="tab1">Todas</CustomTabsTrigger>
            <CustomTabsTrigger value="tab2">Fixos</CustomTabsTrigger>
            <CustomTabsTrigger value="tab3">Variados</CustomTabsTrigger>
          </CustomTabsList>
          <Tabs.Content value="tab1">
            {!matches ? <TransactionCard /> : <Table transactions={transactions}/>}
          </Tabs.Content>
          <Tabs.Content value="tab2">
            {!matches ? <TransactionCard /> : <Table transactions={transactions}/>}
          </Tabs.Content>
          <Tabs.Content value="tab3">
            {!matches ? <TransactionCard /> : <Table transactions={transactions}/>}
          </Tabs.Content>
        </Tabs.Root>
      </TransactionsContainer>
    </div>
  )
}
