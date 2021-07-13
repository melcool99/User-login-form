import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddNewUser.module.css";
import React, { useState , useRef} from "react";
import ErrorModal from "../ErrorHandling/ErrorModal";

const AddNewUser = (props) => {
  const [username, setName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();
//   const inputUser = useRef()
//   const inputAge = useRef()


  const handleNameInput = (event) => {
    setName(event.target.value);
  };
  const handleenteredAgeInput = (event) => {
    setenteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    // const username = inputUser.current.value
    // const enteredAge = inputAge.current.value
    const userObj = { id: Math.random(), name: username, age: enteredAge };
    if (
      username.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredAge < 1
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    props.onAddUser(userObj);
    setName("");
    setenteredAge("");
  };


  const errorHandler = () => {
      setError(null)
  }

  return (
    <React.Fragment>
      {error && (
        <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler}/>
      )}
      <Card className={styles["main-form"]}>
        <form className={styles["main-form"]} onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="name"
            value={username}
            onChange={handleNameInput}
            // ref={inputUser}
          />
          <label htmlFor="enteredAge">Age (Years)</label>
          <input
            type="number"
            id="enteredAge"
            placeholder="age"
            value={enteredAge}
            onChange={handleenteredAgeInput}
            // ref={inputAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddNewUser;
