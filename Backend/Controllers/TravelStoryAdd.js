import TravelStoryModel from "../Modals/TravelStory.modal.js";

const TravelStoryAdd = async (req, res) => {
    const { title, story, visitedLocation, imageUrl, visitedDate,isFavourite} = req.body;
    const { userId } = req.user;

    if (!title || !story || !visitedLocation || !imageUrl || !visitedDate) {
      return  res.status(400).json({ error: true, message: "Please fill all the details" });
    }

    const ParsedVisitedDate = new Date(visitedDate);

    try {
        const travelStory = new TravelStoryModel({
            title,
            story,
            userId,
            visitedLocation,
            imageUrl,
            visitedDate:ParsedVisitedDate,
            isFavourite,
        })

        await travelStory.save();
       return res.status(201).json({ story: travelStory, message: "Story Added Successfully" })

    } catch (err) {
      return  res.status(400).json({ error: true, message: err.message })
    }

}

export default TravelStoryAdd;