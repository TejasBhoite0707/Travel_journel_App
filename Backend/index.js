import express from 'express'
import cors from 'cors'
import  dotenv from 'dotenv'
import config from './config.json' assert{type:"json"}
import mongoose from 'mongoose'
import AccountCreationRouter from './Routes/CreateAcc.js'
import LoginRoute from './Routes/LoginRoute.js'
import TravelStoryAddRouter from './Routes/TravelStoryAddRoute.js'
import authenticateToken from './utilities.js'
import getUserRoute from './Routes/getuserROUTE.js'
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
app.use('/api',authenticateToken,getUserRoute)
app.use('/api',authenticateToken,TravelStoryAddRouter);

let port=8000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})



