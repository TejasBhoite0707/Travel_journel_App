import TravelStoryModel from "../Modals/TravelStory.modal.js";

const GetAllTravelStories = async (req, res) => {
    const { userId } = req.user;
    try {
        const travelStories = await TravelStoryModel.find({ userId: userId }).sort({
            isFavourite: -1
        })
        res.status(200).json({ stories: travelStories });
    } catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
}

export default GetAllTravelStories;