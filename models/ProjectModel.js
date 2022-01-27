import  mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:Array,
        required:false,
    },
    detailTechSkill:{
        type:Array,
        required:false,
    },
    thumbnail:{
        type:Array,
        require:false,
    },
    url:{
        type:String,
        required:false,
    }

})

export const ProjectModel = mongoose.model('Project',schema,'myProject')