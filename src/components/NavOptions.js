import React from "react";
import NavCard from "./NavCard";
import "../styles/NavOptions.css";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  return (
    <div className="navOptions">
      {miPhones &&
        miPhones.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
      {redmiPhones &&
        redmiPhones.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
      {tv &&
        tv.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
      {laptop &&
        laptop.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
      {fitnessAndLifeStyle &&
        fitnessAndLifeStyle.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
      {home &&
        home.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
      {audio &&
        audio.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
      {accessories &&
        accessories.map((item, index) => (
          <NavCard
            key={item.image}
            name={item.name}
            image={item.image}
            price={item.price}
            index={index}
          ></NavCard>
        ))}
    </div>
  );
};

export default NavOptions;
