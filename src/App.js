import React from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import { searchImages } from "./Services/ImageService";

const App = () => {
  const handleSubmit = async (input) => {
    const result = await searchImages(input);
    console.log(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
};

export default App;
