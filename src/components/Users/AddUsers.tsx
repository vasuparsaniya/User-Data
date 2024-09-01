import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import Card from '../UI/Card';
import addUsersCss from '../../assets/css/AddUsers.module.css';
import Button from '../UI/Button';
import { AddUserListHandlerType } from '../../App';
import ErrorModal from '../UI/ErrorModal';

// eslint-disable-next-line no-unused-vars
enum USER_DATA {
  // eslint-disable-next-line no-unused-vars
  UserName = 'username',
  // eslint-disable-next-line no-unused-vars
  Age = 'age',
}

enum ERRORS {
  Title = 'title',
  Message = 'message',
}

export type UserData = {
  [USER_DATA.UserName]: string;
  [USER_DATA.Age]: string;
};

type ErrorType = {
  [ERRORS.Title]: string;
  [ERRORS.Message]: string;
};

type UserDataChangeHandler = (
  // eslint-disable-next-line no-unused-vars
  _event: ChangeEvent<HTMLInputElement>,
  // eslint-disable-next-line no-unused-vars
  _property: USER_DATA,
) => void;

type AddUsersProps = {
  addUserListHandler: AddUserListHandlerType;
};

const initialState = {
  [USER_DATA.UserName]: '',
  [USER_DATA.Age]: '',
};

const AddUsers: React.FC<AddUsersProps> = ({ addUserListHandler }) => {
  // **state**
  const [userData, setUserData] = useState<UserData>(initialState);
  const [errors, setErrors] = useState<ErrorType | null>(null);

  const addUserHandler: FormEventHandler = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (
      userData[USER_DATA.UserName].trim().length === 0 ||
      userData[USER_DATA.Age].trim().length === 0
    ) {
      setErrors({
        [ERRORS.Title]: 'Invalid input',
        [ERRORS.Message]:
          'Please enter a valid username and age (non-empty values).',
      });
      return;
    }
    if (+userData[USER_DATA.Age] < 1) {
      setErrors({
        [ERRORS.Title]: 'Invalid age',
        [ERRORS.Message]: 'Please enter a valid age (> 0).',
      });
      return;
    }
    addUserListHandler(userData[USER_DATA.UserName], userData[USER_DATA.Age]);
    setUserData(initialState);
  };

  const userDataChangeHandler: UserDataChangeHandler = (event, property) => {
    setUserData((prev) => {
      return { ...prev, [property]: event.target.value };
    });
  };

  const errorHandler = () => {
    setErrors(null);
  };

  return (
    <div>
      {errors && (
        <ErrorModal
          errorTitle={errors[ERRORS.Title]}
          errorMessage={errors[ERRORS.Message]}
          onConfirm={errorHandler}
        />
      )}
      <Card className={addUsersCss.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userData[USER_DATA.UserName]}
            onChange={(event) =>
              userDataChangeHandler(event, USER_DATA.UserName)
            }
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={userData[USER_DATA.Age]}
            onChange={(event) => userDataChangeHandler(event, USER_DATA.Age)}
          />
          <Button buttonType="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
