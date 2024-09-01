import React, { useState } from 'react';
import './assets/css/App.css';
import AddUsers, { UserData } from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

export type UserListType = (UserData & { id: string })[];
export type AddUserListHandlerType = (username: string, age: string) => void;

function App() {
  const [userList, setUserList] = useState<UserListType>([]);

  const addUserListHandler: AddUserListHandlerType = (username, age) => {
    setUserList((prev) => [
      ...prev,
      { username: username, age: age, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUsers addUserListHandler={addUserListHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
