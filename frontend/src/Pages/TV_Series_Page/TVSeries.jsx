import React from "react";
import { Hero, SideBar } from "Components";
import { useSelector } from "react-redux";
import { LayoutContainer } from "Components/Layout/Layout.styled";

import { selectTvSeries } from "../../Redux/Slices/bookmark/bookMarkSlice";

const TVSeries = () => {
  const trending = useSelector(selectTvSeries);

  return (
    <LayoutContainer>
      <div>
        <SideBar />
      </div>
      <div>
        <Hero movies={trending} title="Tv Series" />
      </div>
    </LayoutContainer>
  );
};

export default TVSeries;
