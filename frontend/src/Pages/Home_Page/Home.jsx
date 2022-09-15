import React, { useEffect, useState } from "react";
import { Hero } from "../../Components";
import { getTrending } from "../../utils/API_Functions/getData";
import { randomizeData } from "../../utils/API_Functions/getRandomData";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const data = async () => {
    // Same data function as in TVSeries.jsx
    const trending = await getTrending("all", "week");
    // Same random function as in TVSeries.jsx
    setMovies(randomizeData(trending));
  };
  useEffect(() => {
    data();
  }, []);
  return <Hero movies={movies} title="Trending" />;
};

export default Home;
