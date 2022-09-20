import React from "react";
import { SearchInput, SearchContainer } from "./Search.styled.js"
import { ReactComponent as SearchIcon} from "../../assets/icon-search.svg"

const Search = ({ title, search, setSearch }) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search for ${title}`}
        type="text"
        name=""
        id=""
      />
    </SearchContainer>
  );
};

export default Search;
