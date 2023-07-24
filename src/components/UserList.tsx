import { FC, useEffect, useState } from "react";

interface Users {
  id: number;
  username: string;
}

const UserList: FC = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users?.length > 0 ? (
        users.map((user) => <div key={user?.id}>{user?.username}</div>)
      ) : (
        <span>No Users</span>
      )}
    </div>
  );
};

export default UserList;
