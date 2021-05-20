import React from "react";

const LocalSearch = ({ keyword, setKeyword }) => {
  const handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <input
      type="search"
      placeholder="Filter"
      className="form-control mb-4"
      value={keyword}
      onChange={handleSearchChange}
    ></input>
  );
};

export default LocalSearch;
