// routes/userRoutes.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Add a new user/profile
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).json({ message: "Failed to add user" });
  }
});

export default router;
