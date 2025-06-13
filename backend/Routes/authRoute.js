import { Router } from "express";
import { login, logout, signUp } from "../Controller/auth.controller.js";
import { isloggedIn } from "../Middleware/auth.middleware.js";
import { upload } from "../Middleware/multer.js";

const router=Router();

router.post('/signup',upload.single("profilepic"), signUp)
router.post('/login',login)
router.get('/logout',isloggedIn ,logout)



export default router;