import express from "express";
import {} from "../controllers/userControllers.js";
import {adminGuard, authGuard} from "../middleware/authMiddleware.js"
import { createPostCategory, deletePostCategory, getAllPostCategories, getSingleCategory, updatePostCategory } from "../controllers/postCategoriesController.js";

const router = express.Router();

router.route('/').post(authGuard, adminGuard, createPostCategory).get(getAllPostCategories);
router
    .route('/:postCategoryId')
    .get(getSingleCategory)
    .put(authGuard, adminGuard, updatePostCategory)
    .delete(authGuard, adminGuard, deletePostCategory);
export default router;