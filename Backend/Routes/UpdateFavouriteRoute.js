import UpdateIsFavourite from "../Controllers/UpdateIsFavourite.js";
import express from 'express';
import authenticateToken from '../utilities.js';
const FavouriteUpdate = express.Router();
FavouriteUpdate.put('/update-is-favourite/:id',authenticateToken ,UpdateIsFavourite);

export default FavouriteUpdate;