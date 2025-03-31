import express from 'express';
import GetUserController from '../Controllers/GetUser.js';

let getUserRoute=express.Router();

getUserRoute.get('/get-user',GetUserController);

export default getUserRoute;