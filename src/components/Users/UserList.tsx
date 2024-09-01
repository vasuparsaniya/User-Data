import React from 'react';
import Card from '../UI/Card';
import userListCss from '../../assets/css/UserList.module.css';
import { UserListType } from '../../App';

type UserListProps = {
  users: UserListType;
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Card className={userListCss.users}>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.username} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
