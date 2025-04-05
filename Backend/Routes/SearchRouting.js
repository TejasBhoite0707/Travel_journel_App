import express from 'express';
import SearchApiController from '../Controllers/Search.js';

const SearchRouter = express.Router();

SearchRouter.get('/search', SearchApiController);

export default SearchRouter;