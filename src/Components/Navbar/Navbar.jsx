import React from 'react';
import classes from "./Navbar.module.css";
import MyLink from "../Links/MyLink";
import MyButton from "../MyButton/MyButton";
import LoginLink from "../Links/LoginLink";

function Navbar(props) {
  return (
    <nav className={classes.container}>
      <div className={classes.block}>
        <h2 className={classes.header}>YourTrainer</h2>
        <MyLink href="fff">MyLink</MyLink>
        <MyLink href="fff">MyLink1</MyLink>
      </div>
      <div className={classes.block}>
        {props.login ?
          <MyButton onClick={props.auth}>log out</MyButton>
          :
          <>
          <LoginLink href="account/singUp">sing Up</LoginLink>
          <LoginLink href="account/logIn">log In</LoginLink>
          </>
        }
      </div>
    </nav>
  );
}

export default Navbar;