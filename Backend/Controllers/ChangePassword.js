import bcrypt from 'bcrypt'
import userModal from '../Modals/user.modal.js'

const ChangePasswordMode=async(req,res)=>{
    const{oldPassword,newPassword}=req.body;
    const userId=req.user?.userId;
    if(!oldPassword || !newPassword){
        return res.status(400).json({error: true, message: "Please provide old and new passwords"})
    }
    try {
        const user=await userModal.findById(userId)
        if(!user) return res.status(404).json({error:true,message:"user not found"});
        const isMatch=await bcrypt.compare(oldPassword,user.password);
        if(!isMatch) return res.status(401).json({error:true,message:"Old Password is incorrect"});
        const hashedNewpassword=await bcrypt.hash(newPassword,10);
        user.password=hashedNewpassword;
        await user.save();
        res.status(200).json({error:false,message:"password changed successfully"})
    } catch (err) {
        console.error("Error While changing the password");
        res.status(500).json({
            error:true,
            message:"Internel server error"
        });
    }
}

export default ChangePasswordMode;