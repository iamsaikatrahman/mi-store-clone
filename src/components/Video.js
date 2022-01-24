import React from "react";
import VideoCard from "./VideoCard.js";
import "../styles/Videos.css";

const Video = ({ videos }) => {
  return (
    <div className="Videos">
      {videos.map((item, index) => (
        <VideoCard
          key={item.image}
          image={item.image}
          name={item.name}
          index={index}
        />
      ))}
    </div>
  );
};

export default Video;
