import express from 'express';

import {getHome} from '../controller/home.js'

const homeRouter = express.Router();

homeRouter.get('/',getHome);

export default homeRouter;