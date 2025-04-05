import TravelStoryModel from "../Modals/TravelStory.modal.js";

const SearchApiController = async (req, res) => {
    const { query } = req.query;
    const { userId } = req.user;

    if (!query) {
        res.status(400).json({ error: true, message: "Query is Required" });
    }
    try {
        const searchResults = await TravelStoryModel.find({
            userId: userId,
            $or: [
                { title: { $regex: query, $options: "i" } },
                { story: { $regex: query, $options: "i" } },
                { visitedLocation: { $regex: query, $options: "i" } },
            ],
        }).sort({ isFavourite: -1 });
        res.status(200).json({ stories: searchResults });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
export default SearchApiController;