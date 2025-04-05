import EditTravelStoryController from "../Controllers/EditTravelStory.js";
import express from 'express'

const EditTravelStoryRouter = express.Router();

EditTravelStoryRouter.put('/edit-travel/:id', EditTravelStoryController);

export default EditTravelStoryRouter;
