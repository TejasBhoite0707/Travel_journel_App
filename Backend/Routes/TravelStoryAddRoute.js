import express from 'express';
import TravelStoryAdd from '../Controllers/TravelStoryAdd.js';

let TravelStoryAddRouter = express.Router();

TravelStoryAddRouter.post('/travel-story-add', TravelStoryAdd)

export default TravelStoryAddRouter;