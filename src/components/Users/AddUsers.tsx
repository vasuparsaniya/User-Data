import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import Card from '../UI/Card';
import addUsersCss from '../../assets/css/AddUsers.module.css';
import Button from '../UI/Button';

// eslint-disable-next-line no-unused-vars
enum USER_DATA {
  // eslint-disable-next-line no-unused-vars
  UserName = 'username',
  // eslint-disable-next-line no-unused-vars
  Age = 'age',
}

type UserData = {
  [USER_DATA.UserName]: string;
  [USER_DATA.Age]: string;
};

type UserDataChangeHandler = (
  // eslint-disable-next-line no-unused-vars
  _event: ChangeEvent<HTMLInputElement>,
  // eslint-disable-next-line no-unused-vars
  _property: USER_DATA,
) => void;

const AddUsers = () => {
  // **state**
  const [userData, setUserData] = useState<UserData>({
    [USER_DATA.UserName]: '',
    [USER_DATA.Age]: '',
  } as UserData);

  const addUserHandler: FormEventHandler = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
  };

  const userDataChangeHandler: UserDataChangeHandler = (event, property) => {
    setUserData((prev) => {
      return { ...prev, [property]: event.target.value };
    });
  };

  console.log(userData);
  return (
    <Card className={addUsersCss.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userData.username}
          onChange={(event) => userDataChangeHandler(event, USER_DATA.UserName)}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={userData.age}
          onChange={(event) => userDataChangeHandler(event, USER_DATA.Age)}
        />
        <Button buttonType="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
