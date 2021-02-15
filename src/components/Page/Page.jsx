import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import Profile from "./Profile/Profile";

const page = (props) => {

    return (
      <div className="content__page page">
        <Profile profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}/>
        <PostsContainer />
      </div>
    );
  };
  export default page;
   