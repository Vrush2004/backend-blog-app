import PostCategories from "../models/PostCategories"

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

export { createPostCategory }