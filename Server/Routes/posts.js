import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/posts.js";
const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);
router.post("/:id", updatePost);
router.get("/:id/deletePost", deletePost);
router.get("/:id/likePost", likePost);
export default router;
