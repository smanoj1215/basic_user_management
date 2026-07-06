import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function UserTable() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const response = await getUsers();
    setUsers(response.data);
  }

  return (
    <table>

      <thead>

        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>

      </thead>

      <tbody>

        {users.map((user) => (
          <tr key={user.id}>

            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default UserTable;