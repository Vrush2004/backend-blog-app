import Post from "../models/Post.js";
import PostCategories from "../models/PostCategories.js"

const createPostCategory = async(req, res, next) =>{
    try {
        const {title} = req.body;

        const postCategory = await PostCategories.findOne({title})
        if(postCategory){
            const error = new Error("Category is already created!")
            return next(error)
        }

        const newPostCategory = new PostCategories({
            title
        })

        const savedPostCategoty = await newPostCategory.save()

        return res.status(201).json(savedPostCategoty)
    } catch (error) {
        next(error)
    }
}
const getAllPostCategories = async(req, res, next) =>{
    try {
        const postCategories = await PostCategories.find({})

       return res.json(postCategories)
    } catch (error) {
        next(error)
    }
}
const updatePostCategory = async(req, res, next) =>{
    try {
        const {title} = req.body

        const postcategory = await PostCategories.findByIdAndUpdate(req.params.postCategoryId,
        {
            title
        },
        {
            new: true
        })

        if (!postcategory){
            const error = new Error("Category was not found")
            return next(error)
        }

        return res.json(postcategory)
    } catch (error) {
        next(error)
    }
}
const deletePostCategory = async(req, res, next) =>{
    try {
        const categoryId = req.params.postCategoryId;

        await Post.updateMany(
            {categories: {$in: [categoryId]}},
            {$pull: {categories: categoryId}}
        );

        await PostCategories.deleteOne({_id: categoryId})

        res.send({
            message: "Post Catrgory is successfully deleted!"
        })
    } catch (error) {
        next(error)
    }
}

export { createPostCategory, getAllPostCategories, updatePostCategory, deletePostCategory }