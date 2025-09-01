import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Table from "../components/Table";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function OrdersPage() {
  const ordersData = [
    { id: 1, name: "Order 1", amount: 1200, status: "Pending" },
    { id: 2, name: "Order 2", amount: 800, status: "Completed" },
    { id: 3, name: "Order 3", amount: 500, status: "Cancelled" },
  ];

  const kpiData = {
    totalOrders: 85,
    pendingOrders: 20,
    completedOrders: 50,
    revenue: "$32000",
  };

  const pieData = [
    { name: "Pending", value: 20 },
    { name: "Completed", value: 50 },
    { name: "Cancelled", value: 15 },
  ];

  const COLORS = ["#FFBB28", "#00C49F", "#FF8042"];

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <h2 className="text-2xl font-bold mb-4">Orders Overview</h2>

        {/* KPI Cards */}
        <div className="cards-row">
          <Card title="Total Orders" value={kpiData.totalOrders} />
          <Card title="Pending Orders" value={kpiData.pendingOrders} />
          <Card title="Completed Orders" value={kpiData.completedOrders} />
          <Card title="Revenue" value={kpiData.revenue} />
        </div>

        {/* Orders Table */}
        <div className="table-section mt-6">
          <h3 className="text-lg font-bold mb-2">Orders Details</h3>
          <Table
            columns={["ID", "Name", "Amount", "Status"]}
            data={ordersData}
            actions={(row) => (
              <div className="table-actions flex gap-2">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            )}
          />
        </div>

        {/* Pie Chart */}
        <div className="chart-section mt-6">
          <h3 className="text-lg font-bold mb-2">Order Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
