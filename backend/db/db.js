const mongoose = require("mongoose")

const connectDb = async() =>{
       try {
              mongoose.set('strictQuery',false)
              await mongoose.connect(process.env.MONGO_URI)
              console.log("db connected");
              
       } catch (error) {
              console.log("db connection error...");
              res.status(500).json({message:"server error..."})
       }
} 

module.exports = {connectDb}