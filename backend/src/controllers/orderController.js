import Order from "../models/Order.js";

export const createOrder = async (req,res) =>{
    try{
        const {customerName,tractor,quantity,totalprice,status} = req.body;
        const order = await Order.create({customerName,tractor,quantity,totalprice,status});
        res.status(201).json(order);
    } catch (err){
        res.status(500).json({err:err.message});
    }
};


export const getOrders = async (req,res) =>{
    try{
        const orders = await Order.find().populate("tractor");
        res.json(orders);
    } catch (err){
        res.status(500).json({error:err.message});
    }
};

export const updateOrder =async (req,res) =>{
    try{
        const updated = await Order.findByIdAndUpdate(req.param.id,req.body,{new:true});
        res.json(updated);
    } catch (err) {
    res.status(500).json({ error: err.message });
}
};


export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};