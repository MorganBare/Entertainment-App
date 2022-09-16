import React, { useEffect, useState } from "react";
import { Hero, SideBar } from "Components";
import { getTrending } from "utils/API_Functions/getData";
import { randomizeData } from "utils/API_Functions/getRandomData";
import { LayoutContainer } from "Components/Layout/Layout.styled";

const TVSeries = () => {
  const [movies, setMovies] = useState([]);

  const data = async () => {
    const trending = await getTrending("tv", "week");
    setMovies(randomizeData(trending));
  };
  useEffect(() => {
    // Because the call to the data() function is inside a useEffect, every time the page loads, the order of the TV Series will be random.

    // Go to http://localhost:3000/tv-series and refresh the page to see the random TV Series.
    data();
  }, []);
  return (
    <>
      <LayoutContainer>
        <div style={{ paddingLeft: "1.5em" }}>
          <SideBar />
        </div>
        <div>
          <Hero movies={movies} title="TV Series" />
        </div>
      </LayoutContainer>
    </>
  );
};

export default TVSeries;
