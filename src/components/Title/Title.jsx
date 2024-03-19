import React from "react";
import s from "./title.module.css";

const Title = ({ text }) => {
  return <div className={s.title}>{text}</div>;
};

export default Title;
