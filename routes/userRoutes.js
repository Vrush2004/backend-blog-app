import express from "express";
import { 
    registerUser, 
    loginUser, 
    userProfile, 
    updateProfile, 
    updateProfilePicture 
} from "../controllers/userControllers.js";
import {authGuard} from "../middleware/authMiddleware.js"
import { uploadPicture } from "../middleware/uploadPictureMiddleware.js"; // Update path as necessary

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile',authGuard, userProfile);
router.put('/updateProfile',authGuard, updateProfile);
router.put('/updateProfilePicture', authGuard,  uploadPicture.single('profilePicture'), updateProfilePicture);
export default router;
