import React, { useEffect, useState } from "react";
import { Hero, SideBar } from "../../Components";
import { getTrending } from "../../utils/API_Functions/getData";
import { LayoutContainer } from "Components/Layout/Layout.styled";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const data = async () => {
    const trending = await getTrending("movie", "week");
    setMovies(trending);
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      {" "}
      <LayoutContainer>
        <div style={{ paddingLeft: "1.5em" }}>
          <SideBar />
        </div>
        <div>
          <Hero movies={movies} title="Movies" />
        </div>
      </LayoutContainer>
    </>
  );
};

export default Movies;
