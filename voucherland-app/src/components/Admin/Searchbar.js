import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Searchbar({ handleSearch = () => {}, handleExit }) {
  return (
    <form className="searchbar">
      <FiSearch />
      <input
        type="search"
        placeholder="Search..."
        id="searchbar"
        name="searchbar"
        onFocus={handleSearch}
        onBlur={(event) => {
          if (event.target.value === '') handleExit();
        }}
      />
    </form>
  );
}
