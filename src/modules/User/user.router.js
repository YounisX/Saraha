import auth from '../../middleware/auth.middleware.js';
import * as userController from './controller/user.js'
import { Router } from "express";

const router = Router();


router.get('/',userController.getUserModel);
router.get('/find',auth,userController.findUser);


export default router;