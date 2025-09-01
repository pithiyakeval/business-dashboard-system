import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import OrdersPage from "./pages/OrdersPage";
import TractorsPage from "./pages/TractorsPage";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import StatsPage from "./pages/StatsPage";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tractors"
        element={
          <ProtectedRoute>
            <TractorsPage />
          </ProtectedRoute>
        }
      />

      <Route
  path="/stats"
  element={
    <ProtectedRoute>
      <StatsPage />
    </ProtectedRoute>
  }
/>

      {/* Optional: catch-all 404 page */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
