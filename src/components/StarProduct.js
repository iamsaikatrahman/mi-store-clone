import React from "react";
import "../styles/StarProduct.css";

const StarProduct = ({ startProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={startProduct[0].url}>
          {" "}
          <img src={startProduct[0].image} alt="1st Product" />
        </a>
      </div>
      <div>
        <a href={startProduct[1].url}>
          {" "}
          <img src={startProduct[1].image} alt="1st Product" />
        </a>
        <a href={startProduct[2].url}>
          {" "}
          <img src={startProduct[2].image} alt="1st Product" />
        </a>
        <a href={startProduct[3].url}>
          {" "}
          <img src={startProduct[3].image} alt="1st Product" />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
