import upload from '../multer.js';
import express from 'express';
import UploadTheImage from "../Controllers/ImageUpload.js";

const ImageUploadRouter = express.Router();

ImageUploadRouter.post('/image-upload', upload.single("image"), UploadTheImage);

export default ImageUploadRouter;

