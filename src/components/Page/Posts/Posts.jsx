import React from "react";
import MyPost from "./MyPost";

const postsContainer = (props) => {
  let newPostText = React.createRef();
  let addPost = () => {
    props.addPostCreator();
  };

  let onPostChange = () => {
    let text = newPostText.current.value;

    props.updateNewPostText(text);
  };

  let post = props.posts.map((p) => <MyPost name={p.Name} text={p.text} />);

  return (
    <div className="page__myposts myposts">
      <div className="myposts__newpost">
        <input
          ref={newPostText}
          value={props.newPostText}
          onChange={onPostChange}
          type="text"
          placeholder="Что нового?.."
        />
        <button onClick={addPost} className="btn">
          Поделиться
        </button>
      </div>
      <div className="myposts__mypost mypost">{post}</div>
    </div>
  );
};

export default postsContainer;
