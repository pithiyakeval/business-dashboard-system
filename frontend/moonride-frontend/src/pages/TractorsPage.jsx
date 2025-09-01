import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Table from "../components/Table";

export default function TractorsPage() {
  const tractorsData = [
    { id: 1, name: "Tractor A", company: "John Deere", price: 25000 },
    { id: 2, name: "Tractor B", company: "Mahindra", price: 30000 },
    { id: 3, name: "Tractor C", company: "Sonalika", price: 28000 },
  ];

  const kpiData = {
    totalTractors: 15,
    topSelling: "Mahindra",
    avgPrice: "$27,500",
    availableStock: 8,
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />

        <h2 className="text-2xl font-bold mb-4">Tractors Overview</h2>

        {/* KPI Cards */}
        <div className="cards-row">
          <Card title="Total Tractors" value={kpiData.totalTractors} />
          <Card title="Top Selling" value={kpiData.topSelling} />
          <Card title="Average Price" value={kpiData.avgPrice} />
          <Card title="Available Stock" value={kpiData.availableStock} />
        </div>

        {/* Table */}
        <div className="table-section mt-6">
          <h3 className="text-lg font-bold mb-2">Tractor Details</h3>
          <Table
            columns={["ID", "Name", "Company", "Price"]}
            data={tractorsData}
            actions={(row) => (
              <div className="table-actions flex gap-2">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
