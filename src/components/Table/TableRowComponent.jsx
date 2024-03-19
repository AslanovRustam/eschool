import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CheckBoxComponent from "../CheckBox/CheckBoxComponent";
import { Link } from "react-router-dom";

export const TableRowComponent = ({
  idStudent,
  lastName,
  firstName,
  SecondName,
  index,
  classes,
  colums,
  currentStudentRate,
}) => {
  const isStudentAbsent = (id) => {
    return currentStudentRate.find((item) => item.ColumnId === id);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        {index}
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Link to={`/${idStudent}`}>
          {lastName} {firstName} {SecondName}
        </Link>
      </TableCell>
      {colums.map(({ Id }) => (
        <TableCell key={Id} align="center" className={classes.tableCell}>
          <CheckBoxComponent
            checked={isStudentAbsent(Id)}
            idStudent={idStudent}
            idColum={Id}
          />
        </TableCell>
      ))}
    </TableRow>
  );
};
