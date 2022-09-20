import React from "react";
import { Link } from "react-router-dom";
import { SideBarContainer, MainLinksContainer, Profile, IconDiv } from "./SideBar.styled";
import { ReactComponent as Movies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as BookMark } from "../../assets/icon-nav-bookmark.svg";
import { ReactComponent as TV } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as Home } from "../../assets/icon-nav-home.svg";
import ProfileImage from "../../assets/image-avatar.png";

const SideBar = () => {
  return (
    <SideBarContainer>
      <IconDiv>
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
          <Link to="/bookmarks">
            <BookMark />
          </Link>
        </div>
        </MainLinksContainer>
      </IconDiv>
      <Profile>
        <img src={ProfileImage} alt='profile'/>
      </Profile>
    </SideBarContainer>
  );
};

export default SideBar;
