import { useState } from "react";

import { Card, Search } from "../../Components";
import { HeroContainer, Row, Title, Section } from "./Hero.styled";

const Hero = ({ movies, title }) => {
  const [search, setSearch] = useState("");

  return (
    <HeroContainer>
      <Search title={title} search={search} setSearch={setSearch} />
      <Section>
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
      </Section>
    </HeroContainer>
  );
};

export default Hero;
