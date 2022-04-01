import { useState } from "react"


export const useForm = () => {

  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [firstLastname, setFirstLastname] = useState("")
  const [secondLastname, setSecondLastname] = useState("")
  const [birthday, setBirthday] = useState("")
  const [email, setEmail] = useState("")
  const [codeCellphone, setCodeCellphone] = useState("")
  const [cellPhone, setCellPhone] = useState("");
  const [codeHomePhone, setCodeHomePhone] = useState("")
  const [homePhone, setHomePhone] = useState("")
  const [address, setAddress] = useState("")
  const [DPI, setDPI] = useState("")
  const [passportID, setPassportID] = useState("")
  const [cardNumbers, setCardNumbers] = useState("")
  const [cardDueDate, setCardDueDate] = useState("")
  const [cvc, setCvc] = useState("")
  const [firstNameOptional, setFirstNameOptional] = useState("")
  const [secondNameOptional, setSecondNameOptional] = useState("")
  const [firstLastnameOptional, setFirstLastnameOptional] = useState("")
  const [secondLastnameOptional, setSecondLastnameOptional] = useState("")
  const [birthdayOptional, setBirthdayOptional] = useState("")
  const [emailOptional, setEmailOptional] = useState("")
  const [codeCellphoneOptional, setCodeCellphoneOptional] = useState("")
  const [cellPhoneOptional, setCellPhoneOptional] = useState("");
  const [codeHomePhoneOptional, setCodeHomePhoneOptional] = useState("")
  const [homePhoneOptional, setHomePhoneOptional] = useState("")
  const [addressOptional, setAddressOptional] = useState("")
    
  const valuesSetter = (event:any, name:string, setState:React.Dispatch<React.SetStateAction<string>>) =>{
    console.log(event.target.value);
    setState(event.target.value)
  }

  const onSubmitForm = (event:any) => {
    event.preventDefault();
      if (firstLastname !== "" && secondName !== "" && firstLastname !== "" && secondLastname !== "" && birthday !== "" && email !== "" && address !== "" && DPI !== "" && passportID !== "" && cardNumbers !== "" && cardDueDate !== "" && cvc !== "" && codeCellphone !== "" && cellPhone !== "") {
        localStorage.setItem(email, JSON.stringify({
          firstName,
          secondName,
          firstLastname,
          secondLastname,
          birthday,
          email,
          codeCellphone,
          cellPhone,
          codeHomePhone,
          homePhone,
          address,
          DPI,
          passportID,
          cardNumbers,
          cardDueDate,
          cvc,
          firstNameOptional,
          secondNameOptional,
          firstLastnameOptional,
          secondLastnameOptional,
          birthdayOptional,
          emailOptional,
          codeCellphoneOptional,
          cellPhoneOptional,
          codeHomePhoneOptional,
          homePhoneOptional,
          addressOptional
        }));
        alert('Su informacion ha sido guardada y esta lista para su solicitud de VISA.')
      }else{
        alert('Se han detectado campos vacios que son obligatorios. Por favor, llenar todos los campos obligatorios que han sido marcados con un *')
      }
  }

  


  return {
    valuesSetter,
    listValuesFieldset: [firstName, secondName, firstLastname, secondLastname, birthday, email, 
      address, DPI, passportID, cardNumbers,cardDueDate, cvc, firstNameOptional, secondNameOptional,
      firstLastnameOptional, secondLastnameOptional, birthdayOptional, emailOptional, addressOptional],
    listSetStateFieldset: [setFirstName, setSecondName, setFirstLastname, setSecondLastname, setBirthday, 
      setEmail, setAddress, setDPI, setPassportID, setCardNumbers,setCardDueDate, setCvc, setFirstNameOptional, 
      setSecondNameOptional, setFirstLastnameOptional, setSecondLastnameOptional, setBirthdayOptional, setEmailOptional, 
      setAddressOptional],
    listValuesPhoneTelephoneFieldset: [cellPhone, homePhone, cellPhoneOptional, homePhoneOptional],
    listValuesCodeTelephoneFieldset: [codeCellphone, codeHomePhone, codeCellphoneOptional, codeHomePhoneOptional],
    listSetStatePhoneTelephoneFieldset: [setCellPhone, setHomePhone, setCellPhoneOptional,  setHomePhoneOptional],
    listSetStateCodeTelephonefieldset: [setCodeCellphone, setCodeHomePhone, setCodeCellphoneOptional,
      setCodeHomePhoneOptional],
    onSubmitForm,
  }
}
