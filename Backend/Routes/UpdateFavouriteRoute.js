import UpdateIsFavourite from "../Controllers/UpdateIsFavourite.js";
import express from 'express';

const FavouriteUpdate = express.Router();
FavouriteUpdate.put('/update-is-favourite/:id', UpdateIsFavourite);

export default FavouriteUpdate;