import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Searchbar() {
  return (
    <form className="searchbar">
      <FiSearch />
      <input type="search" placeholder="Search..." />
    </form>
  );
}
