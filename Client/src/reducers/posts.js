import * as actionTypes from "../constants/actionTypes";
const reducer = (posts = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...posts, action.payload];
    case actionTypes.UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionTypes.DELETE:
      return posts.filter((post) => post._id != action.payload);
    case actionTypes.LIKE:
      return posts.map((post) => {
        if (post._id == action.payload._id) {
          return { ...post, likeCount: action.payload.likeCount };
        }
        return { ...post };
      });
    default:
      return posts;
  }
};

export default reducer;
