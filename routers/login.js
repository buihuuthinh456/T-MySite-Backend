import express from 'express';

import {confirmPassWord} from '../controller/login.js'

const loginRouter = express.Router();

loginRouter.post('/',confirmPassWord);





export default loginRouter;