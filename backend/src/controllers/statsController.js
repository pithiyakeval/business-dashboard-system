import User from "../models/User.js";
import Tractor from "../models/Tractor.js";
import Order from "../models/Order.js";

export const getStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalTractors = await Tractor.countDocuments();
    const totalOrders = await Order.countDocuments();


    const orders = await Order.find().populate("tractor");
    const revenue = orders.reduce((sum, order) => {
      if (order.status === "completed" && order.tractor?.price) {
        return sum + order.tractor.price;
      }
      return sum;
    }, 0);

    res.json({
      totalUsers,
      totalTractors,
      totalOrders,
      revenue,
      efficiency: Math.floor(Math.random() * 100)   
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
