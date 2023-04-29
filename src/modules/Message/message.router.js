import { Router } from "express";
import * as messageController from './controller/message.js' 
const router = Router();


router.get('/',messageController.getMessageModel);


export default router;