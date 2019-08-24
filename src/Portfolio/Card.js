import React from "react";
import "./Card.scss";

const Card = ({ image, imageName, name, desc }) => (
  <div className="card">
    <img src={image} alt={imageName} className="card-image" />
    <div className="card-description-box">
      <h2 className="card-name">{name}</h2>
      <p className="card-paragraph">{desc}</p>
    </div>
  </div>
);

export default Card;
