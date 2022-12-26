import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={props.click}>
      <img className="imgCard" src={props.img} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
