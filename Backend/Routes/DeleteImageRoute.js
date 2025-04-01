import DeleteImage from "../Controllers/DeleteImage.js";
import express from 'express';

const DeleteImageRouter=express.Router();
DeleteImageRouter.delete('/delete-image',DeleteImage);
export default DeleteImageRouter;