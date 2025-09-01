import mongoose  from "mongoose";
const orderSchema = new mongoose.Schema({
    customerName:{type:String,required:true},
    tractor:{type: mongoose.Schema.Types.ObjectId,ref:"Tractor",required: true },
    quantity:{type:Number,required:true},
    totalPrice: { type: Number, required: true },
    status: {type: mongoose.Schema.Types.ObjectId,ref:"Status"}
},{timestamps:true});

export default mongoose.model("Order",orderSchema);