import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import express from 'express'
import cors from 'cors'
import  dotenv from 'dotenv'
import config from './config.json' assert{type:"json"}
import mongoose from 'mongoose'
import userModal from './Modals/user.modal.js'


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


app.post('/create-account',async(req,res)=>{
const{fullname,email,password}=req.body;

if(!fullname || !email || !password){
return res.status(400).json({error:true,message:"please fill all fields"});
}

const isUser=await userModal.findOne({email})
if(isUser){
    return res.status(400).json({error:true,message:"User Already Exist"});
}

const hashPassword= await bcrypt.hash(password,10);
const User=new userModal({
    fullname,
    email,
    password:hashPassword,
});
await User.save();
const accessToken=jwt.sign(
    {userId:User._id},
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:"72h",
    }
)

return res.status(201).json({
    error:false,
    user:{fullname:User.fullname,email:User.email},
    accessToken,
    message:"Registration Successfull",
});

})


let port=8000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

