import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// import AccountCreationRouter from './Routes/CreateAcc.js'
// import upload from './multer.js'
// import LoginRoute from './Routes/LoginRoute.js'
// import TravelStoryAddRouter from './Routes/TravelStoryAddRoute.js'
// import authenticateToken from './utilities.js'
// import getUserRoute from './Routes/getuserROUTE.js'
// import GetStoriesRouter from './Routes/GetALLtravelStories.js'
// import ImageUploadRouter from './Routes/uploadImage.js'
// import DeleteImageRouter from './Routes/DeleteImageRoute.js'
// import EditTravelStoryRouter from './Routes/EditTRavelStoryRoute.js'
// import DeleteTravelStoryRouter from './Routes/DeleteTravelStory.js'
// import FavouriteUpdate from './Routes/UpdateFavouriteRoute.js'
// import SearchRouter from './Routes/SearchRouting.js'
// import StoriesFilterRouter from './Routes/FilterStoriesRoute.js'
// import ChangePasswordRouter from './Routes/ChangePassR.js'
import Routes from './Routes/indexRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);



dotenv.config();
export const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));


mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

//serve build from the react
app.use(express.static(path.join(__dirname,"../Frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Frontend/dist/index.html"));
})
// app.use('/api', AccountCreationRouter)
// app.use('/api', LoginRoute)
// app.use('/api', authenticateToken, getUserRoute)
// app.use('/api', authenticateToken, TravelStoryAddRouter);
// app.use('/api', authenticateToken, GetStoriesRouter);
 //app.use('/api', ImageUploadRouter);
app.use('/uploads', express.static('uploads'));
app.use('/assets', express.static('assets'));

// app.use('/api', DeleteImageRouter);
// app.use('/api', authenticateToken, EditTravelStoryRouter);
// app.use('/api', authenticateToken, DeleteTravelStoryRouter);
// app.use('/api', authenticateToken, FavouriteUpdate);
// app.use('/api', authenticateToken, SearchRouter);
// app.use('/api', authenticateToken, StoriesFilterRouter);
// app.use('/api',authenticateToken,ChangePasswordRouter);
app.use("/api",Routes);
let port = 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



