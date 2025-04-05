import express from 'express';
import StoriesFilterContoller from '../Controllers/StoriesFilter.js';

const StoriesFilterRouter = express.Router();

StoriesFilterRouter.get('/travel-stories/filter', StoriesFilterContoller);

export default StoriesFilterRouter;