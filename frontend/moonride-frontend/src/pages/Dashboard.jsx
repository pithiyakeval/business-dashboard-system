import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import LineChartComponent from "../components/LineChart";
import PieChartComponent from "../components/PieChart";
import DonutChartComponent from "../components/DonutChart";
import Table from "../components/Table";
import AddUserModal from "../components/AddUserModal";
import "./Dashboard.css";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const username = "Keval"; // You can fetch from DB or auth

  const kpiData = {
    users: 1200,
    orders: 850,
    tractors: 1115,
    revenue: 1132000,
    happyCustomers: "95%",
    growth: "52%",
    rating: 4.8,
  };

  const lineChartData = [
    { month: "Jan", revenue: 4000, orders: 50 },
    { month: "Feb", revenue: 4500, orders: 40 },
    { month: "Mar", revenue: 6000, orders: 60 },
    { month: "Apr", revenue: 3500, orders: 55 },
    { month: "May", revenue: 6000, orders: 70 },
    { month: "Jun", revenue: 10000, orders: 80 },
  ];

  const pieChartData = [
    { name: "Pending", value: 300 },
    { name: "Completed", value: 500 },
    { name: "Cancelled", value: 100 },
  ];

  const donutChartData = [
    { name: "New Holland", value: 400 },
    { name: "John Deer", value: 250 },
    { name: "Swaraj", value: 150 },
    { name: "Sonalika", value: 50 },
  ];

  const customerPieData = [
    { name: "Happy Customers", value: 95 },
    { name: "Others", value: 5 },
  ];

  const ordersData = [
    { id: 1, name: "Order 1", amount: 1200 },
    { id: 2, name: "Order 2", amount: 800 },
    { id: 3, name: "Order 3", amount: 500 },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        {/* Navbar */}
        <Navbar>
          <div
            className="navbar-left"
            style={{ fontWeight: "bold", fontSize: "18px", color: "#00BCD4" }}
          >
            Welcome back, {username}!
          </div>
          <div className="navbar-right flex gap-2">
            <button
              className="btn-logout"
              style={{
                backgroundColor: "#FF3B30",
                color: "white",
                padding: "6px 12px",
                borderRadius: "4px",
                border: "none",
              }}
            >
              Logout
            </button>
          </div>
        </Navbar>

        {/* KPI Cards */}
        <div
          className="cards-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <Card title="Total Users" value={kpiData.users} color="#4CAF50" />
          <Card title="Total Orders" value={kpiData.orders} color="#2196F3" />
          <Card title="Total Tractors" value={kpiData.tractors} color="#FF9800" />
          <Card title="Revenue" value={`$${kpiData.revenue}`} color="#9C27B0" />
          <Card title="Happy Customers" value={kpiData.happyCustomers} color="#00BCD4" />
          <Card title="Growth %" value={kpiData.growth} color="#FF5722" />
          <Card title="Rating" value={kpiData.rating} color="#FFC107" />
        </div>

        {/* Charts Section */}
        <div
          className="charts-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}
        >
          <div className="chart-box bg-white p-4 rounded-lg shadow-md">
            <h3 className="chart-title font-bold mb-2">Monthly Growth</h3>
            <LineChartComponent data={lineChartData} />
          </div>
          <div className="chart-box bg-white p-4 rounded-lg shadow-md">
            <h3 className="chart-title font-bold mb-2">Order Status</h3>
            <PieChartComponent data={pieChartData} />
          </div>
          <div className="chart-box bg-white p-4 rounded-lg shadow-md">
            <h3 className="chart-title font-bold mb-2">Top Selling Tractors</h3>
            <DonutChartComponent data={donutChartData} />
          </div>
          <div className="chart-box bg-white p-4 rounded-lg shadow-md">
            <h3 className="chart-title font-bold mb-2">Customer Happiness</h3>
            <PieChartComponent data={customerPieData} />
          </div>
        </div>

        {/* Orders Table + Add Profile Card */}
        <div
          className="table-and-card"
          style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}
        >
          {/* Orders Table */}
          <div style={{ flex: 2, minWidth: "300px" }}>
            <div className="table-section bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Orders Table</h3>
              <Table
                columns={["ID", "Name", "Amount"]}
                data={ordersData}
                actions={(row) => (
                  <div className="table-actions flex gap-2">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </div>
                )}
              />
            </div>
          </div>

          {/* Add Profile Card */}
          <div style={{ flex: 1, minWidth: "250px", cursor: "pointer" }}>
            <div
              onClick={() => setShowModal(true)}
              style={{
                height: "100%",
                backgroundColor: "#4CAF50",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "32px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <span style={{ fontSize: "48px", marginBottom: "8px" }}>+</span>
              Add Profile
            </div>
          </div>
        </div>

        {showModal && <AddUserModal closeModal={() => setShowModal(false)} />}
      </div>
    </div>
  );
}
