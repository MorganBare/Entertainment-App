import React from "react";
import { useSelector } from "react-redux";
import { selectBookMark } from "../../Redux/Slices/bookmark/bookMarkSlice";
import { Hero, SideBar } from "Components";
import { LayoutContainer } from "Components/Layout/Layout.styled";

const BookMark = () => {
  const bookMarkedMovies = useSelector(selectBookMark);

  return (
    <LayoutContainer>
      <div>
        <SideBar />
      </div>
      <div>
        <Hero movies={bookMarkedMovies} title="Book marked" />
      </div>
    </LayoutContainer>
  );
};

export default BookMark;
