import Tractor from "../models/Tractor.js";

// Create
export const createTractor = async (req, res) => {
  try {
    const tractor = await Tractor.create(req.body);
    res.status(201).json(tractor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read all
export const getTractors = async (req, res) => {
  try {
    const tractors = await Tractor.find();
    res.json(tractors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updateTractor = async (req, res) => {
  try {
    const tractor = await Tractor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tractor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
export const deleteTractor = async (req, res) => {
  try {
    await Tractor.findByIdAndDelete(req.params.id);
    res.json({ message: "Tractor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
