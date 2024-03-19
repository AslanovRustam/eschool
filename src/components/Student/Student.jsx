import React from "react";
import { useParams } from "react-router-dom";
import { useStudentData } from "../../services/useQueryCustomHook";
import Button from "../Button/Button";

const Student = () => {
  const { id } = useParams();

  const { students, studentsPending, studentsError, studentsErrorDetail } =
    useStudentData();

  const currentStudent = students?.Items.find((item) => item.Id === Number(id));

  if (studentsPending) {
    return <span>Loading...</span>;
  }

  if (studentsError) {
    return <span>Error: {studentsErrorDetail}</span>;
  }

  return (
    <div>
      <p>
        Ім’я: <strong>{currentStudent.FirstName}</strong>
      </p>
      <p>
        Прізвище: <strong>{currentStudent.LastName}</strong>
      </p>
      <p>
        По-батькові: <strong>{currentStudent.SecondName}</strong>
      </p>
      <Button text="Повернутися назад" />
    </div>
  );
};

export default Student;
