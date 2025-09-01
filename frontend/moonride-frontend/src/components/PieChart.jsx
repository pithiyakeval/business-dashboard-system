// src/components/PieChart.jsx
import React from "react";
import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

const PieChartComponent = ({ data = null }) => {
  // Use default data if none provided
  const pieData = data || [
    { name: "Pending", value: 20 },
    { name: "Completed", value: 50 },
    { name: "Cancelled", value: 10 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RePieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RePieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
