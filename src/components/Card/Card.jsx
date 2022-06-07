import React from "react";
import "./card.styles.css";

const Card = (props) => {
  const { info } = props;
  return (
    <div className="container-card">
      <div className="card-head">{info.name}</div>
      <div className="card-body">{info._id}</div>
    </div>
  );
};

export default Card;
