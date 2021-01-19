import { connect } from "react-redux";
import {
  addPostCreator,
  updateNewPostCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDespatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostCreator(text));
    },
    addPostCreator: () => {
      dispatch(addPostCreator());
    },
  };
};

const postsContainer = connect(mapStateToProps, mapDespatchToProps)(Posts);

export default postsContainer;
