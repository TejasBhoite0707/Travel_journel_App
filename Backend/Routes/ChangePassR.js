import express from 'express'
import ChangePasswordMode from '../Controllers/ChangePassword.js'

let ChangePasswordRouter=express.Router();

ChangePasswordRouter.put('/change-password',ChangePasswordMode);

export default ChangePasswordRouter;