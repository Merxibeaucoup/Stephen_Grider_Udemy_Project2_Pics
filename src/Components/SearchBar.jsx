import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search__bar">
      <form onSubmit={handleFormSubmit}>
        <label> search for : </label>
        <input
          type="text"
          placeholder="search for images"
          onChange={handleChange}
          value={input}
        />
      </form>
    </div>
  );
};

export default SearchBar;
