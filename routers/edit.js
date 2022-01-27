import express from 'express';

import { postProject } from '../controller/edit.js'

const editRouter = express.Router();

editRouter.post('/create',postProject)

export default editRouter;