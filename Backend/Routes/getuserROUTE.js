import express from 'express';
import GetUserController from '../Controllers/GetUser.js';
import authenticateToken from '../utilities.js';
let getUserRoute = express.Router();

getUserRoute.get('/get-user',authenticateToken, GetUserController);

export default getUserRoute;