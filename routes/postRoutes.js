import express from "express";
const router = express.Router();
import { createPost, deletePost, updatePost } from "../controllers/postControllers.js";
import {authGuard, adminGuard} from "../middleware/authMiddleware.js"
import { getPost } from "../controllers/postControllers.js";

router.post('/', authGuard, adminGuard, createPost);
router
    .route('/:slug')
    .put(authGuard, adminGuard, updatePost)
    .delete(authGuard, adminGuard, deletePost)
    .get(getPost);

export default router;
