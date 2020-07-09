const initState = {
  posts: [
    {id: 1, title: 'Sanbercode React Js', content: 'this is post one'},
    {id: 2, title: 'Final Project', content: 'this is post two'},
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      const newPost = state.posts.filter((post) => post.id !== action.id);
      return {
        posts: newPost,
      };
    case "ADD_POST":
      return {
        posts: [action.post, ...state.posts],
      };
    default:
      return state;
  }
};

export default postReducer;
