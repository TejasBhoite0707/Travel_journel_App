import EditTravelStoryController from "../Controllers/EditTravelStory.js";
import express from 'express'
import authenticateToken from '../utilities.js';
const EditTravelStoryRouter = express.Router();

EditTravelStoryRouter.put('/edit-travel/:id',authenticateToken, EditTravelStoryController);

export default EditTravelStoryRouter;
