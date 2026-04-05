import express from 'express'
import ChangePasswordMode from '../Controllers/ChangePassword.js'
import authenticateToken from '../utilities.js';
let ChangePasswordRouter=express.Router();

ChangePasswordRouter.put('/change-password',authenticateToken,ChangePasswordMode);

export default ChangePasswordRouter;