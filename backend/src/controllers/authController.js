import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// ==================== Register ====================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, linkedin, github } = req.body;
    // const photo = req.file ? req.file.filename : null; // save uploaded photo filename

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    user = await User.create({
      name,
      email,
      password: hashed,
      phone,
      linkedin,
      github,
    });

    res.status(201).json({ token: generateToken(user._id), user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ==================== Login ====================
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        linkedin: user.linkedin,
        github: user.github,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ==================== Google Login ====================
export const googleLoginController = async (req, res) => {
  try {
    const { googleId, email, name } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      // New Google user
      user = await User.create({ name, email, googleId, password: null });
    } else if (!user.googleId) {
      // Existing manual user logging in via Google
      user.googleId = googleId; 
      await user.save();
    }

    res.json({ token: generateToken(user._id), user });
  } catch (err) {
    res.status(500).json({ message: "Google login failed" });
  }
};
