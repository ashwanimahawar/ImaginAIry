import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

//Get All Posts Controller

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({success: true, data: posts});
    } catch (error) {
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        );   
    }
};

//Create Post Controller
export const createPost = async (req, res, next) => {
    try {
        const {author, prompt, imgSrc} = req.body;
        const ImgUrl = await cloudinary.uploader.upload(imgSrc);
        const newPost = await Post.create({
            author,
            prompt,
            imgSrc: ImgUrl?.secure_url,
        });
        return res.status(201).json({
          success: true,
          data: newPost,  
        })
    } catch (error) {
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        );   
    }
};