import * as React from 'react';
import './style.css';

export default function Users() {
  const [users, setUsers] = React.useState<USER[]>([]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users: USER[]) => (setUsers(users), users))
      .then((users) => console.log(users));
  }, []);

  return (
    <div>
      {users.slice(0, 2).map((user) => (
        <pre key={user.id}>{JSON.stringify(user, null, 2)}</pre>
      ))}
    </div>
  );
}
