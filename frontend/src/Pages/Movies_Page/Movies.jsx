import React, { useEffect, useState } from "react";
import { Hero } from "../../Components";
import { getTrending } from "../../utils/API_Functions/getData";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const data = async () => {
    const trending = await getTrending("movie", "week");
    setMovies(trending);
  };
  useEffect(() => {
    data();
  }, []);
  return <Hero movies={movies} title="Movies" />;
};

export default Movies;
