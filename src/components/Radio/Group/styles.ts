import styled from 'styled-components';
export const RadioGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.75rem;

  @media (max-width: 600px){
    overflow-x: scroll;
  }
`