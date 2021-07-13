import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddNewUser.module.css";
import { useState } from "react";
import ErrorModal from "../ErrorHandling/ErrorModal";

const AddNewUser = (props) => {
  const [username, setName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState(false);

  const handleNameInput = (event) => {
    setName(event.target.value);
  };
  const handleenteredAgeInput = (event) => {
    setenteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
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
    <div>
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
          />
          <label htmlFor="enteredAge">Age (Years)</label>
          <input
            type="number"
            id="enteredAge"
            placeholder="age"
            value={enteredAge}
            onChange={handleenteredAgeInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddNewUser;
