import express from 'express';
import Login from '../Controllers/Login.js';

let LoginRoute=express.Router();

LoginRoute.post('/login',Login)

export default LoginRoute;