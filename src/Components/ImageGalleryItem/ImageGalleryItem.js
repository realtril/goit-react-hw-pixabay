import React, { Component } from "react";

const ImageGalleryItem = ({ image, title, largePic, setLargeImg }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image}
        alt={title}
        className="ImageGalleryItem-image"
        onClick={() => setLargeImg(largePic)}
      />
    </li>
  );
};

export default ImageGalleryItem;
