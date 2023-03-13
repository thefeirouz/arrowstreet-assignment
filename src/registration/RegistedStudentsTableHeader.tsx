import { TableCell, TableHead, TableRow } from "@mui/material"

export const RegisteredStudentsTableHeader = () => {
    return <TableHead>
        <TableRow>
            <TableCell>
                {"First Name"}
            </TableCell>
            <TableCell>
                {"Last Name"}
            </TableCell>
            <TableCell>
                {"Social Security Number"}
            </TableCell>
            <TableCell>
                {"Birthdate"}
            </TableCell>
        </TableRow>
    </TableHead>
}