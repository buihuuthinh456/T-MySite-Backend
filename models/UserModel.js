import mongoose from "mongoose";

const schema = new mongoose.Schema({
    account:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:false
    }
})

export const UserModel = mongoose.model("User",schema,"user");