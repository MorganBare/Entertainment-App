import { Card, Search } from "../../Components";
import { HeroContainer, Row } from "./Hero.styled";
import { Info } from "../Card/Card.styled";

const Hero = ({ movies, title }) => {
  return (
    <HeroContainer>
      <Search />
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
          {movies ? (
            movies.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <h1>loading...</h1>
          )}
        </Row>
      </section>
    </HeroContainer>
  );
};

export default Hero;
