import { ComboBox } from '../ComboBox';
import { FieldsetContainer } from '../Fieldset';
import { Input } from '../Input';
import { Label } from '../Label';
import { NumberContainer } from '../NumberContainer';

interface TelephoneFieldsetTypes{
    col_start: number,
    col_end: number,
    row_start: number,
    row_end: number,
    isOptional: boolean,
    errorMessage: string,
    pattern: string,
    type: string,
    label_text: string,
    input_placeholder: string,
    renderOptions: () => JSX.Element[],
    setter: (event: any, name:string, setState: React.Dispatch<React.SetStateAction<string>>) => void,
    name: string,
    setCodeState: React.Dispatch<React.SetStateAction<string>>,
    codeValue: string,
    setPhoneState: React.Dispatch<React.SetStateAction<string>>,
    phoneValue: string,
    order: number
}


export const TelephoneFieldset = (props:TelephoneFieldsetTypes) =>{

    return(
        <FieldsetContainer
        col_start={props.col_start} 
        col_end={props.col_end} 
        row_start={props.row_start} 
        row_end={props.row_end}
        order={props.order}>
            <Label typeOfOption={true} isOptional={props.isOptional}>{props.label_text}</Label>
            <NumberContainer>
                <ComboBox 
                    onChange={(event) => props.setter(event, props.name, props.setCodeState)}
                    value={props.codeValue}
                    >{props.renderOptions()}</ComboBox>
                <Input 
                    placeholder={props.input_placeholder} 
                    type={props.type} 
                    typeOfInput={props.type} 
                    pattern={props.pattern}
                    onChange={(event) => props.setter(event, props.name, props.setPhoneState)}
                    value={props.phoneValue}
                    title={props.errorMessage}
                    />
            </NumberContainer>
        </FieldsetContainer>
    )
}