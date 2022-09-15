import React, { useEffect, useState } from "react";
import { Hero } from "../../Components";
import { getTrending } from "../../utils/API_Functions/getData";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const data = async () => {
    const trending = await getTrending("all", "week");
    setMovies(trending);

    console.log(movies);
  };
  useEffect(() => {
    data();
  }, []);
  return <Hero movies={movies} title="Trending" />;
};

export default Home;
