import { TableBody, TableCell, TableRow } from "@mui/material";
import { Student } from "../interfaces/RegisteredStudentInterfaces";
import { formatSsn } from "../utils/ssnUtils";


export const RegisteredStudentsTableRow = ({ firstName, lastName, ssn, birthdate }: Student) => {
    return <TableBody>
        <TableRow>
            <TableCell>
                {firstName}
            </TableCell>
            <TableCell>
                {lastName}
            </TableCell>
            <TableCell>
                {formatSsn(ssn)}
            </TableCell>
            <TableCell>
                {birthdate}
            </TableCell>
        </TableRow>
    </TableBody>


}