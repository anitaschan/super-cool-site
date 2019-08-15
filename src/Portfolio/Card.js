import React from "react";
import "./Card.scss";

const Card = ({ image, imageName, name, desc }) => {
  return (
    <div className="card">
      <img src={image} alt={imageName} className="card-image" />
      <div className="card-titlebox">
        {name}
        <p className="card-paragraph">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
