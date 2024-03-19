import React from "react";
import { useStudentData } from "../../services/useQueryCustomHook";
import s from "./checkbox.module.css";

const CheckBoxComponent = ({ checked, idStudent, idColum }) => {
  const { markAsAbsent, markAsPresent } = useStudentData();

  const handleChange = () => {
    if (!checked) return markAsAbsent.mutate({ idStudent, idColum });
    markAsPresent.mutate({ idStudent, idColum });
  };

  return (
    <div
      onClick={handleChange}
      className={`${s.checkbox} ${checked && s.checked}`}
    >
      {checked && <span>H</span>}
    </div>
  );
};

export default CheckBoxComponent;
