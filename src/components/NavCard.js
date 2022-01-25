import React from "react";
import "../styles/NavCard.css";

const NavCard = ({ name, image, index, price }) => {
  return (
    <div className="NavCard">
      <img src={image} alt={`${index} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default NavCard;
