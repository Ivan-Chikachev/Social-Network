import React from "react";
import MyPost from "./MyPost";
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {

  let post = props.posts.map((p) => <MyPost name={p.Name} text={p.text} />);

 const addNewPost = (values) => {
     props.addPost(values.newPost)
 }
  return (
    <div className="page__myposts myposts">
      <div className="myposts__newpost">
        <NewPostReduxForm onSubmit = {addNewPost}/>
      </div>
      <div className="myposts__mypost mypost">{post}</div>
    </div>
  );
};

const PostForm = (props) => {

  return(
      <form onSubmit={props.handleSubmit}>
        <Field
            component={'input'}
            name={'newPost'}
            placeholder={"Что нового?.."}
        />
        <button className="btn">
          Поделиться
        </button>
      </form>
  )
}
const NewPostReduxForm = reduxForm({form: 'newPost'})(PostForm)

export default Posts;




