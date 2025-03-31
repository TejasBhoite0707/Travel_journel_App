import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModal from '../Modals/user.modal.js';
import authenticateToken from '../utilities.js';
const GetUserController=async(req,res)=>{
    const{userId}=req.user;
    const isUser=await userModal.findOne({_id:userId})

    if(!isUser){
        return res.sendStatus(401);
    }

    return res.json({
        user:isUser,
        message:"",
    });

}
export default GetUserController;