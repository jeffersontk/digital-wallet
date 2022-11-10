import {useEffect, useState} from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import { Header } from "../../components/Header";
import RadioGroup from "../../components/Radio/Group";
import SearchForm from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import Table from '../../components/Table';
import TransactionCard from '../../components/TransactionCard';
import useMediaQuery from '../../hooks/useMediaQuery';
import { monthList } from "../../utils/monthList";
import { CustomTabsList, CustomTabsTrigger, TransactionsContainer } from "./styles";

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  typeOfExpense: 'income' | 'fixed' | 'variable';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const matches = useMediaQuery('(min-width: 768px)')
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(()=> {
    loadTransactions()
  },[])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <RadioGroup RadioListItem={monthList} />
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
