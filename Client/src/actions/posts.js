import * as api from "../api";
import * as actions from "../constants/actionTypes";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: actions.FETCH_ALL, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: actions.CREATE, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    const action = { type: actions.UPDATE, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const {
      data: { _id },
    } = await api.deletePost(id);
    const action = { type: actions.DELETE, payload: _id };
    return dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    const action = { type: actions.LIKE, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
