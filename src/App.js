import AddNewUser from "./components/Users/AddNewUser";
import UsersList from "./components/Users/UserList";

import { useState } from "react";

const App = () => {
  let [userInfoList, setUserInfo] = useState([]);

  const addUserHandler = (userObj) => {
    setUserInfo((prevUsersList) => {
      return [userObj, ...prevUsersList];
    });
  };

  return (
    <div>
      <AddNewUser onAddUser={addUserHandler} />
      <UsersList users={userInfoList} />
    </div>
  );
};

export default App;
