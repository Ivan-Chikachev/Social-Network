import React from "react";
const myPost = (props) => {
  return (
    <div className="mypost__link link">
    <div className="link__avatar">
      <img
        src="https://sun9-29.userapi.com/c857732/v857732314/2204c6/C6RCjqCG8Uo.jpg"
        alt=""
      />
    </div>
    <div className="link__post">
      <h5>{props.name}</h5>
      <p>
        {props.text}
      </p>
    </div>
  </div>
  )
}
export default myPost;