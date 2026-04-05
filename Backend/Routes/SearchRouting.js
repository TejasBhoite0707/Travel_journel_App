import express from 'express';
import SearchApiController from '../Controllers/Search.js';
import authenticateToken from '../utilities.js';
const SearchRouter = express.Router();

SearchRouter.get('/search',authenticateToken, SearchApiController);

export default SearchRouter;