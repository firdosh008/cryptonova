import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ search, handleChange }) => {
  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
