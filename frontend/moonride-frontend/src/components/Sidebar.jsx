import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header" style={{ backgroundColor: "#1f2937", padding: "10px" }}>
        <h1 style={{ color: "#f5f5f5", fontWeight: "bold", fontSize: "24px" }}>MoonRide 🚀</h1>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Dashboard
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Users
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Orders
        </NavLink>
        <NavLink to="/tractors" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Tractors
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Stats
        </NavLink>
      </nav>
    </div>
  );
}
