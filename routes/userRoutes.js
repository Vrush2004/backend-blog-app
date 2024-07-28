import express from "express";
import { registerUser, loginUser, userProfile } from "../controllers/userControllers.js";
const router = express.Router();
import {authGuard} from "../middleware/authMiddleware.js"

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile',authGuard, userProfile);

export default router;
