import React from 'react'
import { PriceHighlight, TransactionsTable } from './styles'

export default function Table() {
  return (
    <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">
                Salário
              </td>
              <td>
                <PriceHighlight variant="income">
                  R$ 4.000,00
                </PriceHighlight> 
              </td>
              <td>
                Salário
              </td>
              <td>25/10/2022</td>
            </tr>
            <tr>
              <td width="50%">
                Cartão bradesco
              </td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 2.382,00
                </PriceHighlight>
              </td>
              <td>
                cartão
              </td>
              <td>25/10/2022</td>
            </tr>
            <tr>
              <td width="50%">
                Lanche
              </td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 24,99
                </PriceHighlight>
              </td>
              <td>
                Alimentação
              </td>
              <td>25/09/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
  )
}
