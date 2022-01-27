import express from "express";

import cors from 'cors';
import  mongoose  from "mongoose";

import homeRouter from './routers/home.js'
import loginRouter from './routers/login.js'
import projectRouter from "./routers/project.js";
import editRouter from "./routers/edit.js";

import dotenv from 'dotenv';

dotenv.config();



const app = express();
const PORT = process.env.PORT ||5000;

const URI = process.env.DATABASE_URL

app.use(express.json({limit:"30mb"}));
app.use(express.urlencoded({extended:true,limit:"30mb"}));
app.use(cors());

app.use('/',homeRouter);
app.use('/login',loginRouter);
app.use('/project',projectRouter);
app.use('/edit',editRouter);

mongoose.connect(URI)
    .then(()=>{
        console.log('Conntected to DB')
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err)=>{
        console.log('err',err)
    });

