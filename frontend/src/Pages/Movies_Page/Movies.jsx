import React from "react";
import { Hero, SideBar } from "Components";
import { useSelector } from "react-redux";
import { LayoutContainer } from "Components/Layout/Layout.styled";

import { selectMovies } from "../../Redux/Slices/bookmark/bookMarkSlice";

const Movies = () => {
  const trending = useSelector(selectMovies);

  return (
    <LayoutContainer>
      <div>
        <SideBar />
      </div>
      <div>
        <Hero movies={trending} title="Movies" />
      </div>
    </LayoutContainer>
  );
};

export default Movies;
