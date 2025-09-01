import { useState, useEffect } from "react";
import axios from "../services/api";
import AddUserModal from "../components/AddUserModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    const res = await axios.get("/users");
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div className="users-section">
      <div className="header">
        <h2>Users</h2>
        <button onClick={() => setShowModal(true)}>Add Profile</button>
      </div>
      <table>
        <thead><tr><th>Name</th><th>Email</th></tr></thead>
        <tbody>
          {users.map(u => (<tr key={u._id}><td>{u.name}</td><td>{u.email}</td></tr>))}
        </tbody>
      </table>
      {showModal && <AddUserModal onClose={() => setShowModal(false)} refresh={fetchUsers} />}
    </div>
  );
}
