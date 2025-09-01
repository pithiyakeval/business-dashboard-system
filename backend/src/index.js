import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import tractorRoutes from "./routes/tractorRoutes.js";

import orderRoutes from "./routes/orderRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth", authRoutes);
app.use("/api/tractors", tractorRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/users",userRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.listen(5000, () => console.log("Server running on port 5000"));

const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`✅ Server Running on ${PORT}`)))
  .catch(err => console.error("❌ DB Error:", err));

