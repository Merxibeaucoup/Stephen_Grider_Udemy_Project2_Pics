import React from "react";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const handleSubmit = (input) => {
    console.log("do a search with", input);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
