import mongoose from "mongoose";

const tractorSchema = new mongoose.Schema({
  model: { type: String, required: true },
  efficiency: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model("Tractor", tractorSchema);
