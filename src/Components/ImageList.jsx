import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div className="images">
      {images?.map((image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
