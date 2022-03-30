import React from "react";
import { FiSearch } from "react-icons/fi";

interface SearchbarProps {
  handleSearch: () => void;
  handleExit: () => void;
}

export default function Searchbar({ handleSearch, handleExit } : SearchbarProps) {
  
  return (
    <form className="searchbar" data-testid="searchbar" >
      <FiSearch />
      <input
        type="search"
        placeholder="Search..."
        id="searchbar"
        name="searchbar"
        onFocus={handleSearch}
        onBlur={(event) => {
          if (event.target.value === "") handleExit();
        }}
      />
    </form>
  );
}
