import React from "react";
import Post from "../Post/post";
import useStyles from "./style";
import { useSelector } from "react-redux";
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    !posts
  );
};

export default Posts;
