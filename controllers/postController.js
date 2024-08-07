import Post from '../models/postModel.js';
import Comment from '../models/commentModel.js'; // Ensure you have the Comment model correctly imported

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findOneAndDelete({ slug: req.params.slug });
        
        if (!post) {
            const error = new Error("Post not found");
            error.status = 404;
            return next(error);
        }

        await Comment.deleteMany({ post: post._id });

        return res.json({
            message: "Post successfully deleted"
        });
    } catch (error) {
        next(error);
    }
};