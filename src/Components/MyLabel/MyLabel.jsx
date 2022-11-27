import classes from "./MyLabel.module.css";

function MyLabel(props) {

  return (
    <label
           className={classes.label}
           htmlFor={props.for}
    >{props.children}</label>
  );
}

export default MyLabel;