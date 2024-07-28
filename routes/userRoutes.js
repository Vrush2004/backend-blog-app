import express from "express";
import { 
    registerUser, 
    loginUser, 
    userProfile, 
    updateProfile, 
    updateProfilePicture 
} from "../controllers/userControllers.js";
const router = express.Router();
import {authGuard} from "../middleware/authMiddleware.js"

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile',authGuard, userProfile);
router.put('/updateProfile',authGuard, updateProfile);
router.put('/updateProfilePicture', authGuard, updateProfilePicture);
export default router;
