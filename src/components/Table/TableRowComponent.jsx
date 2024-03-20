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
  colums,
  currentStudentRate,
}) => {
  const isStudentAbsent = (id) => {
    return currentStudentRate.find((item) => item.ColumnId === id);
  };

  return (
    <TableRow>
      <TableCell
        component="th"
        scope="row"
        sx={{
          borderBottom: "1px solid #e0e0e0",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        {index}
      </TableCell>
      <TableCell
        sx={{
          borderBottom: "1px solid #e0e0e0",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Link to={`/schoolboy/${idStudent}`}>
          {lastName} {firstName} {SecondName}
        </Link>
      </TableCell>
      {colums.map(({ Id }) => (
        <TableCell
          key={Id}
          align="center"
          sx={{
            borderBottom: "1px solid #e0e0e0",
            borderRight: "1px solid #e0e0e0",
          }}
        >
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
