import { useState } from "react";

import { Card, Search } from "../../Components";
import { HeroContainer, Row } from "./Hero.styled";
import { Info } from "../Card/Card.styled";

const Hero = ({ movies, title }) => {
  const [search, setSearch] = useState("");

  return (
    <HeroContainer>
      <Search search={search} setSearch={setSearch} />
      <section>
        <Info
          padding=".5em 0"
          display="block"
          fontSize="32px"
          color="fff"
          fontWeight="300"
        >
          {title}
        </Info>
        <Row>
          {movies &&
            movies
              .filter((movie) => {
                if (search === "") {
                  return movie;
                } else if (
                  movie?.title?.toLowerCase().includes(search.toLowerCase()) ||
                  movie?.name?.toLowerCase().includes(search.toLowerCase())
                ) {
                  return movie;
                }
              })
              .map((movie) => <Card key={movie.id} movie={movie} />)}
        </Row>
      </section>
    </HeroContainer>
  );
};

export default Hero;
