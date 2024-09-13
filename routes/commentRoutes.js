import express from "express";
const router = express.Router();
import {createComment, deleteComment, getAllComments, UpdateComment } from "../controllers/commentControllers.js";
import {adminGuard, authGuard} from "../middleware/authMiddleware.js"

router
    .route("/")
    .post(authGuard, createComment)
    .get(authGuard, adminGuard, getAllComments);
router.route('/:commentId').put(authGuard, UpdateComment).delete(authGuard, deleteComment)

export default router;
