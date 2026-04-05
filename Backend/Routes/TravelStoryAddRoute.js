import express from 'express';
import TravelStoryAdd from '../Controllers/TravelStoryAdd.js';
import authenticateToken from '../utilities.js';
let TravelStoryAddRouter = express.Router();

TravelStoryAddRouter.post('/travel-story-add',authenticateToken ,TravelStoryAdd)

export default TravelStoryAddRouter;