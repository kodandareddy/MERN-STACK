import mongoose from "mongoose";
import PostMessage from "../modals/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newpost = new PostMessage({ ...post, creator: req.userId });
  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  const deletedPost = await PostMessage.findByIdAndDelete(_id);
  res.json(deletedPost);
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!req.userId)
    return res.status(400).json({ message: "User is not  authenticated" });
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  const post = await PostMessage.findById(_id);
  const index = post.likes.findIndex((id) => id == String(req.userId));
  console.log(index, "====");
  if (index == -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((like) => like !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.status(200).json(updatedPost);
};
