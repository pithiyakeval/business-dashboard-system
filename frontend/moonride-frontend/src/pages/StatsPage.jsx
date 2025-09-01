import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import LineChartComponent from "../components/LineChart";
import PieChartComponent from "../components/PieChart";

export default function StatsPage() {
  const kpiData = {
    totalUsers: 120,
    happyCustomers: "95%",
    totalOrders: 85,
    revenue: "$32,000",
  };

  const monthlyData = [
    { month: "Jan", revenue: 4000, orders: 50 },
    { month: "Feb", revenue: 3500, orders: 40 },
    { month: "Mar", revenue: 5000, orders: 60 },
    { month: "Apr", revenue: 4500, orders: 55 },
    { month: "May", revenue: 6000, orders: 70 },
    { month: "Jun", revenue: 7000, orders: 80 },
  ];

  const pieData = [
    { name: "Pending", value: 20 },
    { name: "Completed", value: 50 },
    { name: "Cancelled", value: 15 },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />

        <h2 className="text-2xl font-bold mb-4">Statistics Overview</h2>

        {/* KPI Cards */}
        <div className="cards-row">
          <Card title="Total Users" value={kpiData.totalUsers} />
          <Card title="Happy Customers" value={kpiData.happyCustomers} />
          <Card title="Total Orders" value={kpiData.totalOrders} />
          <Card title="Revenue" value={kpiData.revenue} />
        </div>

        {/* Charts */}
        <div className="charts-container mt-6">
          <div className="line-chart">
            <h3 className="chart-title">Monthly Growth</h3>
            <LineChartComponent data={monthlyData} />
          </div>
          <div className="pie-chart">
            <h3 className="chart-title">Order Status</h3>
            <PieChartComponent data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
}
