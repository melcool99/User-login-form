import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";
import Button from "../UI/Button";

const ErrorModal = (props) => {
 
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onErrorHandler}/>
      <Card className={`${classes.modal} ${props.classes}`}>
        <header className={classes.header}>
          <h2 className={classes.h2}>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
