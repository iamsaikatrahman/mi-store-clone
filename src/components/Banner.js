import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = ({ banner }) => {
  return (
    <Carousel fade>
      {banner.map((item, index) => (
        <Carousel.Item
          key={item.image}
          id="banner"
          interval={1000}
          keyboard={true}
        >
          <img
            src={item.image}
            className="d-block w-100"
            id="bannerImage"
            alt={`${index} banner`}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read More</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
