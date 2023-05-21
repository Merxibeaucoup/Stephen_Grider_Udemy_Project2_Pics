import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import { searchImages } from "./Services/ImageService";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (input) => {
    const result = await searchImages(input);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
