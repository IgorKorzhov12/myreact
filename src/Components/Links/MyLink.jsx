import React from 'react';
import classes from "./MyLink.module.css";
import {NavLink} from "react-router-dom";

function MyLink(props) {
  return (
    <div>
      <NavLink className={classes.link} to={props.href}>{props.children}</NavLink>
    </div>
  );
}

export default MyLink;