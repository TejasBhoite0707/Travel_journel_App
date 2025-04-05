import TravelStoryModel from "../Modals/TravelStory.modal.js";

const StoriesFilterContoller=async(req,res)=>{
const{startDate,endDate}=req.query;
const{userId}=req.user;
console.log(userId);

console.log(startDate,endDate);

try {
    const start=new Date(parseInt(startDate));
    const end=new Date(parseInt(endDate));
console.log(start,end);

    const filteredStories=await TravelStoryModel.find({
        userId:userId,
        visitedDate:{$gte:start, $lte:end},
    }).sort({isFavourite:-1});
console.log(filteredStories);


    res.status(200).json({stories:filteredStories});
} catch (err) {
    res.status(500).json({message:err.message})
}

}

export default StoriesFilterContoller;