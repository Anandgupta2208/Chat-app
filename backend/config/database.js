import mongoose from "mongoose";
const connectDB = async() =>{
   
         await mongoose.connect(process.env.MONGO_URI).then(() =>{
           
         }).catch((err) => {
            console.log("MongoDB connection failed", err);
         })
}
export default connectDB;