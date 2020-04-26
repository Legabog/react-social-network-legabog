import React from "react";
import DefaultPhoto from "../../../assets/images/user.png";
import classes from "./LoginBlock.module.css";
import { NavLink } from "react-router-dom";

const LoginBlock = (props) => {
  return (
    <div className={classes.loginBlock}>
      <img src={DefaultPhoto} alt="description"></img>
      {props.isAuth ? (
        <p>
          <strong>{props.login}</strong>
        </p>
      ) : (
        <NavLink to={"login"}>
          <p>
            <strong>Login</strong>
          </p>
        </NavLink>
      )}
    </div>
  );
};

export default LoginBlock;
