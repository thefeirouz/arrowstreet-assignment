import { Table } from "@mui/material"
import { Student } from "../interfaces/RegisteredStudentInterfaces"
import { RegisteredStudentsTableHeader } from "./RegistedStudentsTableHeader"
import { RegisteredStudentsTableRow } from "./RegisteredStudentsTableRow"


interface IProps {
    students: [Student]
}
export const RegisteredStudentsTable = ({ students }: IProps) => {
    return (
        <div className="flex-container">
            <Table className="registered-students-table">
                <RegisteredStudentsTableHeader />
                {students.map((student,i) =>
                    <RegisteredStudentsTableRow
                        key={i}
                        firstName={student.firstName}
                        lastName={student.lastName}
                        ssn={student.ssn}
                        birthdate={student.birthdate}
                    />
                )}
            </Table>
        </div>
    )

}