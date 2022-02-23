import React from "react";

function Search({searchTerm, handleSearchInput}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={""}
        placeholder="Type a name to search..."
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default Search;
