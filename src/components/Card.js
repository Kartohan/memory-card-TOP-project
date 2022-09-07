import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={props.click}>
      <div className="imagebox">
        <img src={props.img} alt="" />
      </div>
      <div className="cardtext">{props.name}</div>
    </div>
  );
};

export default Card;
