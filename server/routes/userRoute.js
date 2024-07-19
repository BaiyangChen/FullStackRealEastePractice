import express from 'express';
import { bookVisit, cancelBookings, createUser, getAllBookings, getAllFav, toFav } from '../controllers/userCntrl.js';

//定义具体的URL路径，当router捕捉到/register这个字样时，去置行userCntrl里的注册函数
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", cancelBookings )
router.post("/toFav/:rid", toFav)
router.post("/allFav", getAllFav)
export{router as userRoute}