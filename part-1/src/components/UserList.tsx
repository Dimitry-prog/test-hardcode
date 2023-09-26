import { User } from "../api/api.ts";

type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      {!users.length ? (
        <h2>Users not found</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}, {user.age}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserList;
