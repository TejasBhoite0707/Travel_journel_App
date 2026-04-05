import express from 'express';
import StoriesFilterContoller from '../Controllers/StoriesFilter.js';
import authenticateToken from '../utilities.js';
const StoriesFilterRouter = express.Router();

StoriesFilterRouter.get('/travel-stories/filter', authenticateToken,StoriesFilterContoller);

export default StoriesFilterRouter;