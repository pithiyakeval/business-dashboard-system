import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Table from "../components/Table";
import AddUserModal from "../components/AddUserModal";
import axios from "../services/api"; // make sure this is your configured axios

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // KPI data
  const kpiData = {
    totalUsers: 120,
    happyCustomers: "95%",
    activeUsers: 110,
    inactiveUsers: 10,
  };

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get("/users"); // your API endpoint
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4">Users Overview</h2>

        {/* KPI Cards */}
        <div className="cards-row">
          <Card title="Total Users" value={kpiData.totalUsers} />
          <Card title="Happy Customers" value={kpiData.happyCustomers} />
          <Card title="Active Users" value={kpiData.activeUsers} />
          <Card title="Inactive Users" value={kpiData.inactiveUsers} />
        </div>

        {/* Add Profile Button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Profile
          </button>
        </div>

        {/* Users Table */}
        <div className="table-section mt-6">
          <h3 className="text-lg font-bold mb-2">User Details</h3>
          <Table
            columns={["ID", "Name", "Email", "Status"]}
            data={users.map((u) => ({
              id: u._id,
              name: u.name,
              email: u.email,
              status: u.status || "Active",
            }))}
            actions={(row) => (
              <div className="table-actions flex gap-2">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            )}
          />
        </div>

        {/* Add User Modal */}
        {showModal && (
          <AddUserModal
            closeModal={() => setShowModal(false)}
            refresh={fetchUsers} // refresh table after adding user
          />
        )}
      </div>
    </div>
  );
}
