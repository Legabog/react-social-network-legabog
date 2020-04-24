import React from "react";
import classes from "./Header.module.css";
import Logo from "../common/Logo/Logo";
import LoginBlock from "../common/LoginBlock/LoginBlock";
import SearchInput from "../common/SearchInput/SearchInput";

const Header = (props) => {
  return (
    <header className={classes.header}>
        <Logo />
        <SearchInput/>
        <LoginBlock {...props}/>
    </header>
  );
};

export default Header;
