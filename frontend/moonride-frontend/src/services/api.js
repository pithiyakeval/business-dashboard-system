import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000/api/auth" });

// Auth
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const googleLogin = (data) => API.post("/google-login", data);

// Example: other routes (if needed later)
// export const getUsers = () => API.get("/users");

// Example for data fetching (make sure these endpoints exist on backend)
export const getUsers = () => axios.get("http://localhost:5000/api/users");
export const getOrders = () => axios.get("http://localhost:5000/api/orders");
export const getTractors = () => axios.get("http://localhost:5000/api/tractors");
export const getStats = () => axios.get("http://localhost:5000/api/stats");

export const createOrder = (data) =>
  axios.post("http://localhost:5000/api/orders", data);
export const updateOrder = (id, data) =>
  axios.put(`http://localhost:5000/api/orders/${id}`, data);
export const deleteOrder = (id) =>
  axios.delete(`http://localhost:5000/api/orders/${id}`);

export default API;