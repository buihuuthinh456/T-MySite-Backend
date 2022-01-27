import  mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    logo:{
        type:String,
        required:false,
    },
    gpa:{
        type:String,
        required:false,
    },
    universityName:{
        type:String,
        required:false,
    },
    predict:{
        type:String,
        required:false,
    },
    description:{
        type:String,
        required:false,
    },
    type:{
        type:String,
        required:false,
    },
    listSkill:{
        type:Array,
        required:false,
    }
})

export const HomeModel = mongoose.model('Home',schema)