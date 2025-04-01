import path from 'path'
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DeleteImage=async(req,res)=>{
    const {imageUrl}=req.query;
    if(!imageUrl){
        return res.status(400).json({error:true,message:"Image url is required"});
    }
    try{
    const filename=path.basename(imageUrl);
    const filePath=path.join(__dirname,'..','uploads',filename)
    console.log(filePath);
    
    if(fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
        res.status(200).json({error:false,message:"Image Deleted Successfully"});
    }
    else{
        res.status(400).json({message:"Image Not found"});
    }
    }
    catch(err){
        res.status(500).json({error:true,message:err.message});
    }
}

export default DeleteImage;