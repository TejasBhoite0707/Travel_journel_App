import express from 'express';
import GetAllTravelStories from '../Controllers/GetAllStories.js';
import authenticateToken from '../utilities.js';
let GetStoriesRouter = express.Router();

GetStoriesRouter.get('/get-all-stories', authenticateToken,GetAllTravelStories);

export default GetStoriesRouter;