import React from "react";

const Friend = props => {
  return <div className="friend" onClick={() => props.clickHandler()}></div>;
};

export default Friend;
