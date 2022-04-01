
import styled from 'styled-components';
import { device } from '../../utils/utils';
import { Input } from '../Input';
import { Label } from '../Label';

interface FieldsetTypes {
  col_start: number,
  col_end: number,
  row_start: number,
  row_end: number,
  isOptional: boolean,
  pattern: string,
  errorMessage: string,
  type: string,
  label_text: string,
  input_placeholder: string,
  setter: (event: any, name:string, setState: React.Dispatch<React.SetStateAction<string>>) => void,
  name: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  value: string,
  order: number
}

interface FieldsetContainerTypes {
  col_start: number,
  col_end: number,
  row_start: number,
  row_end: number,
  order: number
}

export const FieldsetContainer = styled.fieldset<FieldsetContainerTypes>`
    padding: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    position: relative;
    padding: 0;
    
    @media ${device.mobile}{
      order: ${props => props.order};
    }
    
    @media ${device.tablet} {
      grid-column: ${props => props.col_start} / ${props => props.col_end};
      grid-row:    ${props => props.row_start} / ${props => props.row_end};
      
    }
`



export const Fieldset = (props:FieldsetTypes) => {
  
  return (
    <FieldsetContainer 
      col_start={props.col_start} 
      col_end={props.col_end} 
      row_start={props.row_start} 
      row_end={props.row_end}
      order={props.order}>
        <Label typeOfOption={true} isOptional={props.isOptional}>{props.label_text}</Label>
        <Input 
          onChange={(event) => props.setter(event, props.name, props.setState)} 
          placeholder={props.input_placeholder}
          onSubmit={()=> console.log("error")}
          type={props.type} 
          typeOfInput={props.type} 
          pattern={props.pattern}
          value={props.value}
          title={props.errorMessage}
          />
        {/* {(props.isOptional === false && props.errorMessage !== "") &&
            <Label typeOfOption={props.isOptional}>{props.errorMessage}</Label>
        } */}
    </FieldsetContainer>
  )
}
