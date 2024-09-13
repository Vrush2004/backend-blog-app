import express from "express";
import { 
    registerUser, 
    loginUser, 
    userProfile, 
    updateProfile, 
    updateProfilePicture, 
    getAllUsers,
    deleteUser
} from "../controllers/userControllers.js";
import {adminGuard, authGuard} from "../middleware/authMiddleware.js"
import { uploadPicture } from "../middleware/uploadPictureMiddleware.js"; // Update path as necessary

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile',authGuard, userProfile);
router.put('/updateProfile',authGuard, updateProfile);
router.put('/updateProfilePicture', authGuard,  uploadPicture.single('profilePicture'), updateProfilePicture);
router.get("/", authGuard, adminGuard, getAllUsers)
router.delete("/:userId", authGuard, adminGuard, deleteUser)
export default router;
