import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images, response }) => {
  const imagesOutput = images.map(image => {
    return <ImageCard key={image.id} images={image} />;
  });

  return response ? (
    <div class="ui active centered inline loader"></div>
  ) : (
    <div className="image-list">{imagesOutput}</div>
  );
};

export default ImageList;
