import React from "react";
import { Link } from "react-router-dom";
import { SideBarContainer, MainLinksContainer } from "./SideBar.styled";
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
      <MainLinksContainer>
      <div>
        <Link to="/">
          <Home />
        </Link>
      </div>
      <div>
        <Link to="/movies">
          <Movies />
        </Link>
      </div>
      <div>
        <Link to="/tv-series">
          <TV />
        </Link>
      </div>
      <div>
        <BookMark />
      </div>
      </MainLinksContainer>
    </SideBarContainer>
  );
};

export default SideBar;
