import React from "react";
import { SideBarContainer } from "./SideBar.styled";
import { ReactComponent as Movies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as BookMark } from "../../assets/icon-nav-bookmark.svg";
import { ReactComponent as TV } from "../../assets/icon-category-tv.svg";

const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
        <Movies />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <BookMark />
      </div>
      <div>
        <TV />
      </div>
      <div></div>
      <div></div>
    </SideBarContainer>
  );
};

export default SideBar;
