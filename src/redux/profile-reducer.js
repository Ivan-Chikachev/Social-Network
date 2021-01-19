let initialState = {
  posts: [
    {
      id: 1,
      Name: 'Cat',
      text: 'Я уронил елку)',
    },
  ],
  profile: null,
  newPostText: '',
};
const SEND_POST = 'SEND_POST';
const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_POST:
      return { ...state, newPostText: action.newText };
    case ADD_POST:
      let newPost = {
        id: 2,
        Name: 'Kitty Kat',
        text: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const updateNewPostCreator = (text) => ({
  type: SEND_POST,
  newText: text,
});
export const addPostCreator = () => ({ type: ADD_POST });
export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile
});

export default profileReducer;
