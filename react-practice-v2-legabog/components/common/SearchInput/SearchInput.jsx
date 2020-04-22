import React from "react";
import classes from "./Search.module.css";

const SearchInput = (props) => {
  return (
    <div className={classes.inputheader}>
        <input type="text" placeholder="Search"></input>
        {/* <i className="fas fa-search" ></i> */}
    </div>
  );
};

export default SearchInput;
