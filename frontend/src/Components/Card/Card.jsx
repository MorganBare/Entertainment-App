import React from "react";
import { ReactComponent as MovieIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeries } from "../../assets/icon-nav-tv-series.svg";

import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardTitle,
  CardContent,
  Info,
} from "./Card.styled.js";

const Card = ({ movie }) => {
  const {
    title,
    name,
    release_date,
    media_type,
    poster_path,
    adult,
    first_air_date,
  } = movie;
  const formatDate = release_date
    ? release_date.slice(0, 4)
    : first_air_date.slice(0, 4);
  const imagePrefix = "http://image.tmdb.org/t/p/w500";

  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={`${imagePrefix}${poster_path}`} />
      </ImageContainer>
      <CardContent>
        <Info>{formatDate} .</Info>

        {media_type === "movie" ? (
          <MovieIcon className="hover" />
        ) : (
          <TvSeries className="hover" />
        )}

        <Info>{media_type} .</Info>
        <Info>{adult ? "18+" : "PG"}</Info>
      </CardContent>
      <CardTitle>{title ?? name}</CardTitle>
    </CardContainer>
  );
};

export default Card;
