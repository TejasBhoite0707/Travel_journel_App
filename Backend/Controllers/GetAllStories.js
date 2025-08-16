import TravelStoryModel from "../Modals/TravelStory.modal.js";

const GetAllTravelStories = async (req, res) => {
    const { userId } = req.user;
    try {
        const travelStories = await TravelStoryModel.find({ userId: userId }).sort({
            isFavourite: -1
        })
        const defaultDate = new Date("1970-01-01T00:00:02.025+00:00");
        const formattedStories=travelStories.map(story=>{
            const storyObj=story.toObject();
            if(storyObj.visitedDate && new Date(storyObj.visitedDate).getTime() === defaultDate.getTime()){
                storyObj.visitedDate=new Date();
            }
            return storyObj;
        })
        res.status(200).json({ stories: formattedStories });
    }
     catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

export default GetAllTravelStories;