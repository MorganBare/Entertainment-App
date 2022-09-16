import React from "react";
import { ReactComponent as MovieIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeries } from "../../assets/icon-nav-tv-series.svg";
import Oval from "../../assets/Oval.png"

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
    poster_path,
    adult,
    first_air_date,
  } = item;
  const formatDate = release_date
    ? release_date.slice(0, 4)
    : first_air_date.slice(0, 4);
  const imagePrefix = "http://image.tmdb.org/t/p/w154";
  console.log(item)
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={`${imagePrefix}${poster_path}`} />
      </ImageContainer>
      <CardContent>
        <Info>{formatDate}</Info>
        <img src={Oval} alt='Oval'/>

        <Info>{media_type === "movie" ? <MovieIcon /> : <TvSeries />}</Info>
        <Info>{media_type === 'tv' ? 'TV Series' : 'Movie'}</Info>
        
        <img src={Oval} alt='Oval'/>
        <Info>{adult ? "18+" : "PG"}</Info>
      </CardContent>
      <CardTitle>{title ?? name}</CardTitle>
    </CardContainer>
  );
};

export default Card;
