import { useEffect, useState } from 'react';
import { Button, TextField } from "@mui/material"
import { submitRegistration } from "../apis/registrationApis"
import { DatePicker } from '@mui/x-date-pickers';
import { RegistrationInputWrapper } from './RegistrationInputWrapper';
import { formatSsn } from '../utils/ssnUtils';

interface IProps {
   onAdd: Function
}
export const RegistrationForm = ({ onAdd }: IProps) => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");

   const [ssn, setSsn] = useState("")
   const [formattedSsn, setFormattedSsn] = useState("");
   const [birthdate, setBirthdate] = useState<any>("");

   const removeDashes = (inputString: any) => {
      return inputString.replaceAll("-", "");
   }

   useEffect(() => {
      setFormattedSsn(formatSsn(ssn))
   }, [ssn])

   const onSubmit = () => {
      submitRegistration({
         firstName,
         lastName,
         ssn,
         birthdate: new Date(birthdate.$d).toLocaleDateString()
      }).then(resp => {
         onAdd(resp);
         setFirstName("");
         setLastName("");
         setSsn("");
         setBirthdate("");
      }
      )
   }
   const hasLetters = (string: string) => {
      var regex = ".*[a-zA-Z].*";
      return string.match(regex);
   }

   const onSsnChange = (string: string) => {
      if (string.length < 12 && !hasLetters(string)) {
         setSsn(removeDashes(string));
      }
   }

   return (
      <div className="flex-container">
         <div>
            <h4>Register a Student</h4>
         </div>
         <RegistrationInputWrapper>
            <TextField className="registration-field" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" />
         </RegistrationInputWrapper>
         <RegistrationInputWrapper>
            <TextField className="registration-field" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" />
         </RegistrationInputWrapper>
         <RegistrationInputWrapper>
            <TextField className="registration-field" value={formattedSsn} onChange={(e) => onSsnChange(e.target.value)} label="Social Security Number" />
         </RegistrationInputWrapper>
         <RegistrationInputWrapper>
            <DatePicker className="registration-field" disableFuture={true} value={birthdate} onChange={(date: any) => {
               setBirthdate(date);
            }} label="Birthdate" />
         </RegistrationInputWrapper>
         <RegistrationInputWrapper>
            <Button onClick={() => onSubmit()}>Register Student</Button>
         </RegistrationInputWrapper>
      </div>
   )

}