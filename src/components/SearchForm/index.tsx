import { SearchFormContainer } from "./styled";
import {FiSearch} from 'react-icons/fi'
export default function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar por transações"/>
      
      <button>
        Buscar
        <FiSearch />
      </button>
    </SearchFormContainer>
  )
}
