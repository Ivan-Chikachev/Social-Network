import React from "react";
import Massage from "./Massage";

const mail = (props) => {
 
  let massages = props.massages.map(m =>  <Massage massage={m.massage} id={m.id}></Massage>);
  return  (
  <div>{massages}</div>
  )
};
export default mail;
