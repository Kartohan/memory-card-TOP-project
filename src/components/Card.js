import React from "react";

const Card = (props) => {
  return (
    <div onClick={props.click}>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Card;
