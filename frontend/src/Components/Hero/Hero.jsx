import { useState } from "react";

import { Card, Search } from "../../Components";
import { HeroContainer, Row, Title } from "./Hero.styled";

const Hero = ({ movies, title }) => {
  const [search, setSearch] = useState("");

  return (
    <HeroContainer>
      <Search title={title} search={search} setSearch={setSearch} />
      <section>
          <Title>{title}</Title>
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
              .map((movie) => (
                <Card key={movie.id} movie={movie} mytitle={title} />
              ))}
        </Row>
      </section>
    </HeroContainer>
  );
};

export default Hero;
