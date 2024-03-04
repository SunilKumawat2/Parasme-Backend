const Blog = require("../models/Blog");

const CreateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const images = req.file ? req.file.filename : null;

        const newBlog = new Blog({
            title,
            content,
            images
        })
        await newBlog.save();
        res.status(201).json({ status: 201, message: "Successfully Add The Blog", data: newBlog })
    } catch (error) {
        res.status(500).json({ status: 500, message: "Error Occurred While Creating Blog" })
    }
}

const GetBlog = async (req, res) => {
    try {
        const Blogs = await Blog.find();
        if (Blogs.length > 0) {
            const BlogData = Blogs.map((BlogResult) => ({
                _id: BlogResult._id,
                title: BlogResult.title,
                content: BlogResult.content,
                images: BlogResult.images
            }))
            return res.status(200).json({ status: 200, message: "Successfully Fetch the Blog Data", data: BlogData })
        }
        return res.status(400).json({ status: 400, message: "Data Not Found the Blog Data", data: BlogData })

    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error Fetching the Blog Data", data: BlogData })

    }
}
const DeleteBlog = async (req, res) => {
    try {
        const { _id } = req.params;
        const BlogDelete = await Blog.findByIdAndDelete(_id);
        if (!BlogDelete) {
            return res.status(400).json({ status: 400, message: "Blog Not Found For Deleting" })
        }
        return res.status(200).json({ status: 200, message: "Successfully Delete The Blog" })

    } catch (error) {

        return res.status(500).json({ status: 500, message: "Server Side Errro Delete The Blog" })
    }
}
const GetBlogDetails = async (req, res) => {
    try {
        const { _id } = req.params;
        const Blogs = await Blog.findById(_id);
        if (!Blogs) {
            return res.status(400).json({ status: 400, message: " Data Not Found Fetch the Blog data By Id" })
        }
        return res.status(200).json({ status: 200, message: "Successfully Fetch the Blog data By Id", data: Blogs })

    } catch (error) {
        return res.status(500).json({ status: 500, message: " Server Side Error Fetch the Blog data By Id" })
    }
}
const EditBlog = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, content } = req.body;
        const images = req.file ? req.file.filename : null;
        const Blogs = await Blog.findByIdAndUpdate(_id, {
            title: title,
            content: content,
            images: images
        }, { new: true })

        if(!Blogs){
            return res.status(400).json({status:400,message:"Blog Not Found For Updating"})
        }
        return res.status(200).json({status:200,message:"Successfully Updated The Blog",data:Blogs})
    }catch(error){
        return res.status(500).json({status:500,message:"Server Side Error Updating The Blog"})
    }
    
}
module.exports = { CreateBlog, GetBlog, DeleteBlog, GetBlogDetails ,EditBlog}