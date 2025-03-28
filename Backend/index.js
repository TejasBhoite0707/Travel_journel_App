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
    message:"Registration Successfull....",
});

})


app.post('/login',async(req,res)=>{
    const{email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({message:"Please fill teh eamil and password"})
    }

    const user=await userModal.findOne({email});
    if(!user){
        return res.status(400).json({message:"User Not Found"});
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid Credintionals"});
    }

    const accessTokenLogin=jwt.sign(
        {userId:user._id},
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:"72h",
        }
    )
     
    return res.status(400).json({error:false,
        message:"Login Successfull",
    user:{fullname:user.fullname,email:user.email},
    accessTokenLogin
    })

})

let port=8000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

