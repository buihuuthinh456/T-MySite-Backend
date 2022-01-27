import  {HomeModel}  from "../models/HomeModel.js";


export const getHome = async (req,res)=>{
   try{
        const data = await HomeModel.find();
        res.status(200).json(data);
   }
   catch(err){
        res.status(500).json({error:err});
   }
};

export const addHome = async (req,res)=>{
    try{
         const newData = req.body;
         
         const data= new HomeModel(newData);
         await data.save()

         res.status(200).json(data)
    }
    catch(err){
         res.status(500).json({error:err});
    }
 };

 export const updateHome = async (req,res)=>{
    try{
         const updateData = req.body;
         
         const data = await HomeModel.findOneAndUpdate({_id:updateData._id},updateData,{new:true});
         await data.save()
         res.status(200).json(data)
    }
    catch(err){
         res.status(500).json({error:err});
    }
 };