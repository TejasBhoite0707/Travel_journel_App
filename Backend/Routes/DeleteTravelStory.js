import DeleteTravelStoryController from "../Controllers/DeleteTravelStory.js";
import express from 'express';
import authenticateToken from '../utilities.js';
const DeleteTravelStoryRouter = express.Router();
DeleteTravelStoryRouter.delete('/delete-travel-story/:id',authenticateToken, DeleteTravelStoryController)

export default DeleteTravelStoryRouter;