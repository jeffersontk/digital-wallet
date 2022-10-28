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

export function Transactions() {
  const matches = useMediaQuery('(min-width: 768px)')
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <RadioGroup RadioListItem={monthList} />
        <Tabs.Root defaultValue="tab1">
          <CustomTabsList aria-label="Tipo de gastos">
            <CustomTabsTrigger value="tab1">Fixos</CustomTabsTrigger>
            <CustomTabsTrigger value="tab2">Variados</CustomTabsTrigger>
          </CustomTabsList>
          <Tabs.Content value="tab1">
            {!matches ? <TransactionCard /> : <Table />}
          </Tabs.Content>
          <Tabs.Content value="tab2">
            {!matches ? <TransactionCard /> : <Table />}
          </Tabs.Content>
        </Tabs.Root>
      </TransactionsContainer>
    </div>
  )
}
