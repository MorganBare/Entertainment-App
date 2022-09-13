import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardTitle,
  CardContent,
  Info,
} from "./Card.styled.js";

const Card = ({ item }) => {
  const {
    title,
    name,
    release_date,
    media_type,
    overview,
    poster_path,
    original_language,
    adult,
    first_air_date,
  } = item;
  const imagePrefix = "http://image.tmdb.org/t/p/w500";

  console.log(item);
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={`${imagePrefix}${poster_path}`} />
      </ImageContainer>
      <CardContent>
        <Info>Release: {release_date ?? first_air_date}</Info>
        <Info>Lan: {original_language}</Info>
        <Info>{overview}</Info>
        <Info>{media_type}</Info>
        <Info>{adult ? "18+" : "PG"}</Info>
      </CardContent>
      <CardTitle>{title ?? name}</CardTitle>
    </CardContainer>
  );
};

export default Card;
