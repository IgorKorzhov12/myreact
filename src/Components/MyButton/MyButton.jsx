import classes from "./MyButton.module.css";

function MyButton(props) {
  return (
    <button onClick={props.onClick} className={classes.btnstyles}>{props.children}</button>
  );
}

export default MyButton;