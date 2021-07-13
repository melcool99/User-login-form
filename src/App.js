import AddNewUser from "./components/Users/AddNewUser";
import UsersList from "./components/Users/UserList";

import React, { useState } from "react";

const App = () => {
  let [userInfoList, setUserInfo] = useState([]);

  const addUserHandler = (userObj) => {
    setUserInfo((prevUsersList) => {
      return [userObj, ...prevUsersList];
    });
  };

  return (
    <React.Fragment>
      <AddNewUser onAddUser={addUserHandler} />
      <UsersList users={userInfoList} />
    </React.Fragment>
  );
};

export default App;
