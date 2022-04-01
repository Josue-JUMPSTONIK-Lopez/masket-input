import './App.css';
import { Button } from './Components/Button';
import { Fieldset } from './Components/Fieldset';
import { Option } from './Components/Option';
import { TelephoneFieldset } from './Components/TelephoneFieldset';
import { Title } from './Components/Title';
import { Form } from './Container/Form/Form';
import { useForm } from './CustoHooks/useForm';
import { phoneCodes, phones, titles, fieldsets } from './utils/utils';


function App() {

  const {valuesSetter, 
        listValuesFieldset, 
        listSetStateFieldset,
        listValuesPhoneTelephoneFieldset,
        listValuesCodeTelephoneFieldset,
        listSetStatePhoneTelephoneFieldset,
        listSetStateCodeTelephonefieldset,
        onSubmitForm,
        } = useForm();

  return (
    <div className="App">
      <Form onSubmit={onSubmitForm}>
        {titles.map( title => 
        <Title
        key={title.id} 
        col_start={title.col_start} 
        col_end={title.col_end} 
        row_start={title.row_start} 
        row_end={title.row_end}
        order={title.order}>
        {title.text}
        </Title>
        )}
        
        {fieldsets.map( (fieldset, index) =>
          <Fieldset 
            key={fieldset.id}
            label_text={fieldset.label_text}
            input_placeholder={fieldset.input_placeholder}
            type={fieldset.type}
            isOptional={fieldset.isOptional}
            errorMessage={fieldset.errorMessage}
            pattern={fieldset.pattern}
            col_start={fieldset.col_start}
            col_end={fieldset.col_end}
            row_start={fieldset.row_start}
            row_end={fieldset.row_end}
            setter={valuesSetter} 
            name={fieldset.name} 
            setState={listSetStateFieldset[index]}
            value = {listValuesFieldset[index]}
            order={fieldset.order}
            />
        )}

        {phones.map( (phone,index) =>

        <TelephoneFieldset
          label_text={phone.label_text} 
          input_placeholder={phone.input_placeholder}
          type={phone.type}
          isOptional={phone.isOptional}
          errorMessage={phone.errorMessage}
          pattern={phone.pattern}
          renderOptions={() => phoneCodes.filter((value, index, self) =>self.indexOf(value) === index).map(number => <Option key={number} value={number}>{number}</Option>)}
          col_start={phone.col_start} 
          col_end={phone.col_end} 
          row_start={phone.row_start} 
          row_end={phone.row_end}
          setter={valuesSetter} 
          name={phone.name} 
          setCodeState={listSetStateCodeTelephonefieldset[index]}
          codeValue = {listValuesCodeTelephoneFieldset[index]}
          setPhoneState = {listSetStatePhoneTelephoneFieldset[index]}
          phoneValue = {listValuesPhoneTelephoneFieldset[index]}
          order={phone.order}
          />
          )}
        <Button
        col_start={3} 
        col_end={5} 
        row_start={16} 
        row_end={16}
        order={26}
        // type="submit"
        >Submit</Button>
      </Form>
    </div>
  );
}

export default App;
