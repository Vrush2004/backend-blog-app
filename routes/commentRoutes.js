import express from "express";
const router = express.Router();
import {createComment, UpdateComment } from "../controllers/commentControllers.js";
import {authGuard} from "../middleware/authMiddleware.js"

router.post('/', authGuard, createComment);
router.put('/:commentId',authGuard, UpdateComment)

export default router;
