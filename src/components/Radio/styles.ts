import styled from 'styled-components';

export const Label = styled.label`
  background-color: ${props => props.theme["gray-600"]};
  width: 100%;
  height: 45px;
  border-radius: 4px;
  padding: 1rem;
  color: ${props => props.theme["gray-300"]};

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background-color: ${props => props.theme["green-500"]};
  }
`