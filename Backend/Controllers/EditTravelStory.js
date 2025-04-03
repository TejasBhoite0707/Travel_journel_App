import TravelStoryModel from "../Modals/TravelStory.modal.js";

const EditTravelStoryController=async(req,res)=>{
    const {id}=req.params;
    const{title,story,visitedLocation,imageUrl,visitedDate}=req.body;
    const {userId}=req.user;

    if(!title || !story || !visitedLocation || !imageUrl || !visitedDate){
        res.status(400).json({error:true,message:"Please fill all the details"});
    }
    
    const ParsedVisitedDate=new Date(parseInt(visitedDate));
    try {
        const TravelStory=await TravelStoryModel.findOne({_id:id,userId:userId});
    console.log(TravelStory);
    
        if(!TravelStory){
            return res.status(404).json({error:true,message:"Travel Story Not found"});
        }
        
        const placeholderPng='http://localhost:8000/assets/Placeholder.png';
    
        TravelStory.title=title;
        TravelStory.story=story;
        TravelStory.visitedLocation=visitedLocation;
        TravelStory.imageUrl=imageUrl || placeholderPng;
        TravelStory.visitedDate=ParsedVisitedDate;
    
        await TravelStory.save();
        res.status(200).json({story:TravelStory,message:"Story Updated Successfuly"})
    } catch (err) {
        res.status(400).json({error:true,message:err.message});
    }
  
    
}

export default EditTravelStoryController;