import express from 'express';
import CreateAccount from '../Controllers/CreateAcc.js';

let AccountCreationRouter = express.Router();

AccountCreationRouter.post('/create-account', CreateAccount);

export default AccountCreationRouter;