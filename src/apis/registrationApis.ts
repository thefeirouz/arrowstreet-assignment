import { Student } from "../interfaces/RegisteredStudentInterfaces";

const sampleResponse = 
    [
        {
            firstName: "Eric",
            lastName: "Feirouz",
            ssn: "123456789",
            birthdate: "4/27/1997"
        },
        {
            firstName: "Saul",
            lastName:"Goodman",
            ssn: "987654321",
            birthdate: "4/1/1970"
        },
        {
            firstName: "Walter",
            lastName: "White",
            ssn: "503456720",
            birthdate: "4/27/1997"
        },
        {
            firstName: "Jessie",
            lastName: "Pinkman",
            ssn: "978623341",
            birthdate: "4/1/1970"
        }
    ]

export const submitRegistration = (student:Student) => {
    return Promise.resolve(student);
}

export const getRegisteredStudents = () => {
    return Promise.resolve(sampleResponse);

}