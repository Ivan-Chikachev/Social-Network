let initialState = {
  posts: [
    {
      id: 1,
      Name: "Cat",
      text: "Я уронил елку)",
    },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND-POST":
      state.newPostText = action.newText;
      return state;
    case "ADD-POST":
      let newPost = {
        id: 2,
        Name: "Kitty Kat",
        text: state.newPostText,
      };
      state.posts.push(newPost);
      state.newPostText = action.newPost;
      return state;
    default:
      return state;
  }
};

export const updateNewPostCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
});
export const addPostCreator = () => ({
    type: 'ADD-POST'
});

export default profileReducer;