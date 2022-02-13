import axios from "axios";

const url = "http://localhost:5000";

export const fetchPosts = () => axios.get(url + "/posts");

export const createPost = (newPost) => axios.post(url + "/posts", newPost);

export const updatePost = (id, updatePosts) =>
  axios.post(`${url}/posts/${id}`, updatePosts);

export const deletePost = (id) => axios.get(`${url}/posts/${id}/deletePost`);

export const likePost = (id) => axios.get(`${url}/posts/${id}/likePost`);

export const signIn = (formData) => axios.post(url + "/user/signin", formData);
export const signUp = (formData) => axios.post(url + "/user/signup", formData);
