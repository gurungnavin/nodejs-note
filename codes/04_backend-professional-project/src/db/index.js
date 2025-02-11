import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectDB = async () => {
  try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log("Database COnnected");
      
  } catch (error) {
    console.log(error.message)
  }
}

export default connectDB;