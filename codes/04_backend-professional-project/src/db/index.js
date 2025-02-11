import mongoose from "mongoose"

const connectDB = async () => {
  try {
    mongoose.connect.on('connect', () => {
      console.log("DB connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
  } catch (error) {
    console.log(error.message);
    
  }
}

export default connectDB;