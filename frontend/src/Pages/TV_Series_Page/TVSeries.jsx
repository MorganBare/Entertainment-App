import React, { useEffect, useState } from "react";
import { Hero } from "../../Components";
import { getTrending } from "../../utils/API_Functions/getData";
import { randomizeData } from "../../utils/API_Functions/getRandomData";

const TVSeries = () => {
  const [movies, setMovies] = useState([]);

  const data = async () => {
    const trending = await getTrending("tv", "day");
    setMovies(randomizeData(trending));
  };
  useEffect(() => {
    // Because the call to the data() function is inside a useEffect, every time the page loads, the order of the TV Series will be random.

    // Go to http://localhost:3000/tv-series and refresh the page to see the random TV Series.
    data();
  }, []);
  return <Hero movies={movies} title="TV Series" />;
};

export default TVSeries;
