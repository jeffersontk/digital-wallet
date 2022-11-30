import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

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

export const RadioButtonMouthFilter = styled(RadioGroup.Item)`
  background-color: ${props => props.theme["gray-600"]};
  width: 100%;
  height: 45px;
  border-radius: 4px;
  border: 0;
  padding: 1rem;
  color: ${props => props.theme["gray-300"]};
  outline: none;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-state='checked']{
    color: ${props => props.theme.white};
    background: ${props =>  props.theme["green-500"]};
    transform: background-color 0.2s, color 0.2s;
    
    svg {
      color: ${props => props.theme.white};
    }
  }
`