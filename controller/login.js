import { UserModel } from "../models/UserModel.js";

export const confirmPassWord = async (req,res)=>{
    try{
          const account = req.body.account;
          const password = req.body.password;
          console.log(account)
          console.log(password)

          const data = await UserModel.findOne({account:account});
          console.log(data)
          if(!data){
               res.status(200).json({state:"error",content:"Account is invalid"});
          }
          else{
               if(password==data.password){
                    res.status(200).json({state:"success",content:"Login Success",username:data.account,type:data.type||"guest"});
               }
               else{
                    res.status(200).json({state:"error",content:"Password Wrong"});
               }
          }
   }
   catch(err){
          res.status(500).json({error:err});
   }
}
