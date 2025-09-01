import mongoose from "mongoose";


const   connectDB = async() =>  {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connnected");
    } catch(err){
        console.error(" MongoDB Conncection Failed",err)
        process.exit(1);
    }
};

export default connectDB
