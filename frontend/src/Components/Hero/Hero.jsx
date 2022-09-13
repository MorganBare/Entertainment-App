import { useEffect, useState } from "react";
import { Card } from "../../Components";
import { HeroContainer, Row } from "./Hero.styled";
import { getTrending } from "../../utils/API_Functions/getData";
const Hero = () => {
  const [movies, setMovies] = useState([]);
  const data = async () => {
    const trending = await getTrending("all", "day");
    setMovies(trending);

    console.log(movies);
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <HeroContainer>
      <Row>
        {movies ? (
          movies.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h1>loading...</h1>
        )}
      </Row>
    </HeroContainer>
  );
};

export default Hero;
