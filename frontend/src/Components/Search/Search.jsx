import React from "react";
import { SearchContainer, SearchInput } from "./Search.styled.js";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

const Search = ({ search, setSearch }) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movies or TV series"
        type="text"
        name=""
        id=""
      />
    </SearchContainer>
  );
};

export default Search;
