import React from "react";
import { Hero, SideBar } from "Components";
import { useSelector } from "react-redux";
import { LayoutContainer } from "Components/Layout/Layout.styled";

import { selectTrending } from "../../Redux/Slices/bookmark/bookMarkSlice";

const Home = () => {
  const trending = useSelector(selectTrending);

  return (
    <LayoutContainer>
      <div>
        <SideBar />
      </div>
      <div>
        <Hero movies={trending} title="Trending" />
      </div>
    </LayoutContainer>
  );
};

export default Home;
