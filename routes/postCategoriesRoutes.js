import express from "express";
import {} from "../controllers/userControllers.js";
import {adminGuard, authGuard} from "../middleware/authMiddleware.js"

const router = express.Router();

router.route('/').post(authGuard, adminGuard, createPostCategory);
export default router;