import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import express from 'express'
import cors from 'cors'
import  dotenv from 'dotenv'
import config from './config.json' assert{type:"json"}
import mongoose from 'mongoose'
import userModal from './Modals/user.modal.js'
import AccountCreationRouter from './Routes/CreateAcc.js'
import LoginRoute from './Routes/LoginRoute.js'


dotenv.config();
export const app=express();
app.use(express.json());
app.use(cors({origin:"*"}));


try{
    mongoose.connect(config.connectionString);
    console.log("connected to database");
}
catch(err){
    console.error(err); 
}


app.use('/api',AccountCreationRouter)


app.use('/api',LoginRoute)

let port=8000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



