import express from "express";
import ChangePasswordRouter from "./ChangePassR.js";
import AccountCreationRouter from "./CreateAcc.js";
import DeleteImageRouter from "./DeleteImageRoute.js";
import DeleteTravelStoryRouter from "./DeleteTravelStory.js";
import EditTravelStoryRouter from "./EditTRavelStoryRoute.js";
import StoriesFilterRouter from "./FilterStoriesRoute.js";
import GetStoriesRouter from "./GetALLtravelStories.js";
import getUserRoute from "./getuserROUTE.js";
import LoginRoute from "./LoginRoute.js";
import SearchRouter from "./SearchRouting.js";
import TravelStoryAddRouter from "./TravelStoryAddRoute.js";
import FavouriteUpdate from "./UpdateFavouriteRoute.js";
import ImageUploadRouter from "./uploadImage.js";

const router=express.Router();

router.use(AccountCreationRouter);
router.use(LoginRoute);
router.use(getUserRoute);
router.use(TravelStoryAddRouter);
router.use(GetStoriesRouter);
router.use(ImageUploadRouter);
router.use(DeleteImageRouter);
router.use(EditTravelStoryRouter);
router.use(DeleteTravelStoryRouter);
router.use(FavouriteUpdate);
router.use(SearchRouter);
router.use(StoriesFilterRouter);
router.use(ChangePasswordRouter);

export default router;