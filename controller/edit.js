import { ProjectModel } from "../models/ProjectModel.js";

export const postProject = async (req, res) => {
    try{
        const newProject = req.body;

        const project = new ProjectModel(newProject)

        await project.save();

        res.status(200).json(newProject)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}