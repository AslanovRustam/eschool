import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableRowComponent } from "./TableRowComponent";
import { useStudentData } from "../../services/useQueryCustomHook";

export default function TableComponent() {
  const {
    students,
    studentsPending,
    studentsError,
    studentsErrorDetail,
    colums,
    rate,
  } = useStudentData();

  if (studentsPending) {
    return <span>Loading...</span>;
  }

  if (studentsError) {
    return <span>Error: {studentsErrorDetail}</span>;
  }

  const currentStudentRate = (id) => {
    return rate.Items.filter((item) => item.SchoolboyId === id);
  };

  return (
    <>
      {students ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 760 }} aria-label="table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #e0e0e0",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  №
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #e0e0e0",
                    borderRight: "1px solid #e0e0e0",
                  }}
                  align="center"
                >
                  Ім’я учня
                </TableCell>
                {colums?.Items.map(({ Title, Id }) => (
                  <TableCell
                    sx={{
                      borderBottom: "1px solid #e0e0e0",
                      borderRight: "1px solid #e0e0e0",
                    }}
                    key={Id}
                    align="center"
                  >
                    {Title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {students?.Items.map(
                ({ Id, LastName, FirstName, SecondName }, index) => (
                  <TableRowComponent
                    key={Id}
                    idStudent={Id}
                    lastName={LastName}
                    firstName={FirstName}
                    SecondName={SecondName}
                    index={index + 1}
                    colums={colums.Items}
                    currentStudentRate={currentStudentRate(Id)}
                  />
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Вибачте, сервіс зараз недоступний. Спробуйте пізніше</p>
      )}
    </>
  );
}
