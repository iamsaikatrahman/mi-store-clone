import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link className="HoTAccessoriesLink" to="/music">
        Music Store
      </Link>
      <Link className="HoTAccessoriesLink" to="/smartDevices">
        Smart Devices
      </Link>
      <Link className="HoTAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="HoTAccessoriesLink" to="/lifestyle">
        Lifestyle
      </Link>
      <Link className="HoTAccessoriesLink" to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
