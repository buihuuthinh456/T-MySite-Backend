import { ProjectModel } from '../models/ProjectModel.js'


export const getProject = async (req, res) => {
    try{
        // const updateData = {
        //     _id:"61ef7aeb7200ca278bba09bb",
        //     detailTechSkill:detailTechSkill,
        //     description:description,
        // }

        // const data = await ProjectModel.findOneAndUpdate({_id:updateData._id},updateData,{new:true});
        // await data.save()

        const myProject = await ProjectModel.find();
        res.status(200).json(myProject)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


