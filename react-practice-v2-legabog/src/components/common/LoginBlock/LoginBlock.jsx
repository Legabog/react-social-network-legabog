import React from "react";
import classes from "./LoginBlock.module.css";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const LoginBlock = (props) => {
  return (
    <div className={classes.loginBlock}>
      {props.isAuth ? (
        <div className={classes.loginblock}>
          <Avatar size={32} icon={<UserOutlined />} />
          <p>
            <strong>{props.login}</strong>
          </p>
        </div>
      ) : (
        <NavLink to={"login"}>
          <div className={classes.loginblock}>
          <Avatar size={32} icon={<UserOutlined />} />
          <p>
          <strong>Login</strong>
          </p>
        </div>
        </NavLink>
      )}
    </div>
  );
};

export default LoginBlock;
