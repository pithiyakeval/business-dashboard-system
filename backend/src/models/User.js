import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // can be null for Google login
  googleId: { type: String }, 
  phone: { type: String }, // new field
  linkedin: { type: String }, // new field
  github: { type: String }, // new field
  // photo: { type: String }, // filename of uploaded photo
}, {
  timestamps: true
});

export default mongoose.model("User", userSchema);
