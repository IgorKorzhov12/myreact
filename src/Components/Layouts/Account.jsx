import classes from "../../Pages/SingUpLogIn.module.css";
import LoginLink from "../Links/LoginLink";
import {Outlet} from "react-router-dom"

function Account() {
  return (
    <div className={classes.container}>
      <form className={classes.styles}>
        <div className={classes.containerForLink}>
          <LoginLink href="logIn">log in</LoginLink>
          <LoginLink href="singUp">sign up</LoginLink>
        </div>
        <Outlet/>
      </form>
    </div>
  );
}

export default Account;