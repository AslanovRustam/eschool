import React from "react";
import { useStudentData } from "../services/useQueryCustomHook";
import Title from "../components/Title/Title";
import TableComponent from "../components/Table/Table";

const Home = () => {
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

  return (
    <>
      <Title text="Eschool" />
      <TableComponent
        data={students.Items}
        colums={colums.Items}
        rate={rate.Items}
      />
    </>
  );
};

export default Home;
