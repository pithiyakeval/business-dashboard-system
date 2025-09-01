import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); // Now inside router
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });

  const login = (data) => {
    setAuth(data);
    navigate("/dashboard"); // Redirect after login
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
