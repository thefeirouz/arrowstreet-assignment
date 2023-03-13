import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './App.css';
import { RegistrationForm } from './registration/RegistrationForm';
import { RegisteredStudentsTable } from './registration/RegisteredStudentsTable';
import { useEffect, useState } from 'react';
import { getRegisteredStudents } from './apis/registrationApis';



function App() {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const onAdd = (student) => setRegisteredStudents((prevRegistered) => {
    const newState = [...prevRegistered];
    newState.push(student)
    return newState;
  })
  useEffect(() => {
    getRegisteredStudents().then(resp => setRegisteredStudents(resp))
  }, [])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
    <div>
      <RegistrationForm onAdd={onAdd}/>
      <RegisteredStudentsTable students={registeredStudents} />
    </div>
    </LocalizationProvider>
  );
}

export default App;
