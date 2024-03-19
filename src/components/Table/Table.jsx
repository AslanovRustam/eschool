import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { TableRowComponent } from "./TableRowComponent";

const useStyles = makeStyles({
  tableCell: {
    borderBottom: "1px solid #e0e0e0",
    borderRight: "1px solid #e0e0e0",
  },
});

export default function TableComponent({ data, colums, rate }) {
  const classes = useStyles();

  const currentStudentRate = (id) => {
    return rate.filter((item) => item.SchoolboyId === id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 760 }} aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>№</TableCell>
            <TableCell className={classes.tableCell} align="center">
              Ім’я учня
            </TableCell>
            {colums.map(({ Title, Id }) => (
              <TableCell className={classes.tableCell} key={Id} align="center">
                {Title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ Id, LastName, FirstName, SecondName }, index) => (
            <TableRowComponent
              key={Id}
              idStudent={Id}
              lastName={LastName}
              firstName={FirstName}
              SecondName={SecondName}
              index={index + 1}
              colums={colums}
              classes={classes}
              currentStudentRate={currentStudentRate(Id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
