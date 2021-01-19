import React from "react";

const Massage = (props) => {
    return (
      <div className="massages__item">
       {props.massage}
      </div>
    );
  };

  export default Massage;