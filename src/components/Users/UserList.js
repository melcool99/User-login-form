import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  const alist = props.users.map((user) => (
    <li key={user.id}>
      {user.name} {user.age} years old
    </li>
  ));
  return (
    <Card className={classes.users}>
      <ul className={classes.users}>
        {alist}
      </ul>
    </Card>
  );
};

export default UsersList;
