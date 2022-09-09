import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={props.click}>
      <img className="imgCard" src={props.img} alt="" />
      {props.name}
    </div>
  );
};

export default Card;
