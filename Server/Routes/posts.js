import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getPosts);

router.post("/", auth, createPost);
router.post("/:id", auth, updatePost);
router.get("/:id/deletePost", auth, deletePost);
router.get("/:id/likePost", auth, likePost);
export default router;
