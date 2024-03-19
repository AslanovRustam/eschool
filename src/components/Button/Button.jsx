import { NavLink } from "react-router-dom";
import s from "./button.module.css";

const Button = ({ text }) => {
  return (
    <NavLink to="/">
      <p className={s.goBackBtn}>{text}</p>
    </NavLink>
  );
};

export default Button;
