import TravelStoryModel from "../Modals/TravelStory.modal.js";

const UpdateIsFavourite = async (req, res) => {
    const { id } = req.params;
    const { isFavourite } = req.body;
    const { userId } = req.user;

    try {
        const travelStory = await TravelStoryModel.findOne({ _id: id, userId: userId });
        console.log(travelStory);

        if (!travelStory) {
            res.status(404).json({ message: "Story not found" });
        }

        travelStory.isFavourite = isFavourite;
        console.log(travelStory[isFavourite]);
        await travelStory.save();
        res.json({ message: "Favourite updated successfully" });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }


}

export default UpdateIsFavourite;