import classes from "./LoginLink.module.css";
import {NavLink} from "react-router-dom";

function LoginLink(props) {

  const className = ({isActive}) => classes.link + " " + (isActive ? classes.active : "");

  return(
    <div>
      <NavLink className={className} to={props.href}>{props.children}</NavLink>
    </div>
  );
}

export default LoginLink;