import express from 'express';
import { bookVisit, createUser } from '../controllers/userCntrl.js';

//定义具体的URL路径，当router捕捉到/register这个字样时，去置行userCntrl里的注册函数
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit)
export{router as userRoute}