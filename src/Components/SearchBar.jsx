import React from "react";

const SearchBar = ({ onSubmit }) => {
  const handleClick = () => {
    onSubmit("cars");
  };
  return (
    <div>
      <input type="text" placeholder="search for images" />
      <button onClick={handleClick}> click me</button>
    </div>
  );
};

export default SearchBar;
