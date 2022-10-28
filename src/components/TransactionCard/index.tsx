import { Card, CardContainer, PriceHighlight } from './styled'
import {CgPentagonRight} from 'react-icons/cg'
import {HiOutlineCalendar} from 'react-icons/hi'

export default function TransactionCard() {
  return (
    <CardContainer>
      <Card>
        <h4>Salário</h4>
        <PriceHighlight variant='income'>R$ 4.000,00</PriceHighlight>

        <div>
          <span> 
            <CgPentagonRight size={24}/>
            Salário
          </span>
          <span>
            <HiOutlineCalendar size={24}/>
            25/10/2022
          </span>
        </div>
      </Card>
    </CardContainer>
  )
}
