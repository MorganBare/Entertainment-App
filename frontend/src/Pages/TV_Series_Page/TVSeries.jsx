import React, { useEffect, useState } from "react";
import { Hero } from "../../Components";
import { getTrending } from "../../utils/API_Functions/getData";
const TVSeries = () => {
  const [movies, setMovies] = useState([]);
  const data = async () => {
    const trending = await getTrending("tv", "day");
    setMovies(trending);
  };
  useEffect(() => {
    data();
  }, []);
  return <Hero movies={movies} title="TV Series" />;
};

export default TVSeries;
