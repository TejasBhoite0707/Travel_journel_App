import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModal from '../Modals/user.modal.js'

const CreateAccount=async(req,res)=>{
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

}

export default CreateAccount;


