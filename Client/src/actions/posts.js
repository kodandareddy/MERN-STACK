import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: "FETCH ALL", payload: data };
    return dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    const action = { type: "CREATE", payload: data };
    return dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};