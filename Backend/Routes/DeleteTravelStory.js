import DeleteTravelStoryController from "../Controllers/DeleteTravelStory.js";
import express from 'express';

const DeleteTravelStoryRouter=express.Router();
DeleteTravelStoryRouter.delete('/delete-travel-story/:id',DeleteTravelStoryController)

export default DeleteTravelStoryRouter;