import TravelStoryModel from "../Modals/TravelStory.modal.js";

const TravelStoryAdd=async(req,res)=>{
const{title,story,visitedLocation,imageUrl,visitedDate}=req.body;
const {userId}=req.user;

if(!title || !story || !visitedLocation || !imageUrl || !visitedDate){
    res.status(400).json({error:true,message:"Please fill all the details"});
}

const ParsedVisitedDate=new Date(parseInt(visitedDate));

try {
    const travelStory=new TravelStoryModel({
        title,
        story,
        userId,
        visitedLocation,
        imageUrl,
        visitedDate:ParsedVisitedDate,
    })

    await travelStory.save();
    res.status(201).json({story:travelStory,message:"Story Added Successfully"})

} catch (err) {
    res.status(400).json({error:true,message:err.message})
}

}

export default TravelStoryAdd;