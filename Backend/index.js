import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import config from './config.json' assert{type: "json"}
import mongoose from 'mongoose'
import AccountCreationRouter from './Routes/CreateAcc.js'
import upload from './multer.js'
import LoginRoute from './Routes/LoginRoute.js'
import TravelStoryAddRouter from './Routes/TravelStoryAddRoute.js'
import authenticateToken from './utilities.js'
import getUserRoute from './Routes/getuserROUTE.js'
import GetStoriesRouter from './Routes/GetALLtravelStories.js'
import ImageUploadRouter from './Routes/uploadImage.js'
import DeleteImageRouter from './Routes/DeleteImageRoute.js'
import EditTravelStoryRouter from './Routes/EditTRavelStoryRoute.js'
import DeleteTravelStoryRouter from './Routes/DeleteTravelStory.js'
import FavouriteUpdate from './Routes/UpdateFavouriteRoute.js'
import SearchRouter from './Routes/SearchRouting.js'
import StoriesFilterRouter from './Routes/FilterStoriesRoute.js'

dotenv.config();
export const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));


try {
    mongoose.connect(config.connectionString);
    console.log("connected to database");
}
catch (err) {
    console.error(err);
}


app.use('/api', AccountCreationRouter)
app.use('/api', LoginRoute)
app.use('/api', authenticateToken, getUserRoute)
app.use('/api', authenticateToken, TravelStoryAddRouter);
app.use('/api', authenticateToken, GetStoriesRouter);
app.use('/api', ImageUploadRouter);
app.use('/uploads', express.static('uploads'));
app.use('/assets', express.static('assets'));

app.use('/api', DeleteImageRouter);
app.use('/api', authenticateToken, EditTravelStoryRouter);
app.use('/api', authenticateToken, DeleteTravelStoryRouter);
app.use('/api', authenticateToken, FavouriteUpdate);
app.use('/api', authenticateToken, SearchRouter);
app.use('/api', authenticateToken, StoriesFilterRouter);

let port = 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



