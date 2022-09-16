import React from "react";
import { SearchInput, SearchContainer } from "./Search.styled.js"
import { ReactComponent as SearchIcon} from "../../assets/icon-search.svg"

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon/>
      <SearchInput
        placeholder="Search for movies or TV series"
        type="text"
        name=""
        id=""
      />
    </SearchContainer>
  );
};

export default Search;
