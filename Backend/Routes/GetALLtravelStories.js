import express from 'express';
import GetAllTravelStories from '../Controllers/GetAllStories.js';

let GetStoriesRouter = express.Router();

GetStoriesRouter.get('/get-all-stories', GetAllTravelStories);

export default GetStoriesRouter;