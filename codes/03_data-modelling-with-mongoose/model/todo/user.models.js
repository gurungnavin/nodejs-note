import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        tolowercase : true,
    },
    email : {
        type : String,
        required: true,
        tolowercase : true,
    },
    password : {
        type : String,
        required: [true, "Please enter password"]
    },
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)