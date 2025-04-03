import TravelStoryModel from '../Modals/TravelStory.modal.js'
import path from 'path'
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);


const DeleteTravelStoryController=async(req,res)=>{
    const{id}=req.params;
    const{userId}=req.user;
    console.log("Delete API",id,userId);
    
try {
    const travelStory=await TravelStoryModel.findOne({_id:id, userId:userId});
    console.log(travelStory);
    
    if(!travelStory){
res.status(400).json({error:true,message:"Travel Story Not found"});
    }
    await travelStory.deleteOne();
    console.log("story deleted");
    
    const imageUrl=travelStory.imageUrl;
    const filename=path.basename(imageUrl);
    console.log("imageUrl",imageUrl);
    console.log("FileName",filename);
    
    
    const filePath=path.join(__dirname,'../uploads',filename);
     console.log("FilePath",filePath);
     
     try {
        if (fs.existsSync(filePath)) {  
            fs.unlinkSync(filePath);
            console.log("Image file deleted successfully");
        } else {
            console.warn("Image file not found:", filename);
        }
    } catch (err) {
        console.error("Failed to delete image file", err);
    }
    

    res.status(200).json({message:"Travel Story deleted Successfully"});
} catch (err) {
    res.status(400).json({message:err.message})
}
    

}

export default DeleteTravelStoryController;