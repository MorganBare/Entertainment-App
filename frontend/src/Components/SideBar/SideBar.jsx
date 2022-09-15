import React from "react";
import { SideBarContainer } from "./SideBar.styled";
import { ReactComponent as Movies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as BookMark } from "../../assets/icon-nav-bookmark.svg";
import { ReactComponent as TV } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as Home } from "../../assets/icon-nav-home.svg";

const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
        <Logo />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Movies />
      </div>

      <div>
        <TV />
      </div>
      <div>
        <BookMark />
      </div>
      <div></div>
    </SideBarContainer>
  );
};

export default SideBar;
