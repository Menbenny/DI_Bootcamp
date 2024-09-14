const postModel = require('../models/postModels');

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json(posts);
    } catch ( error ) {
        next (error);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const post = await postModel.getPostsById(req.params.id);
        if ( !post) {
            return res.status(404).json({ message: 'Post not found'});
        }
        res.json(post);
    } catch ( error) {
        next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const { title, content} = req.body;
        const newPost = await postModel.createPost(title, content);
        res.status(201).json(newPost);
    } catch ( error) {
        next(error)
    }
};

const updatePost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const updatePost = await postModel.updatePost(req.params.id, title, content);
        if(!updatePost) { 
            return res.status(404).json({message: 'Post not found'});
        }
        res.json(updatePost);
    }catch(error) {
        next(error);
    }
};

const deletePost = async (req, res, next) => {
    try {
      const deleted = await postModel.deletePost(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json({ message: 'Post deleted' });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  };