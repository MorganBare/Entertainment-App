import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as MovieIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeries } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookMarkFill } from "../../assets/icon-bookmark-full.svg";

import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardTitle,
  CardContent,
  Info,
  IconContainer,
} from "./Card.styled.js";

import { addBookMark } from "../../Redux/Slices/bookmark/bookMarkSlice";

const Card = ({ movie }) => {
  const dispatch = useDispatch();

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

  const saveBookMark = (movie) => {
    const bookMarked = {
      ...movie,
      isBookmarked: true,
    };
    // Map over the bookMarkedMovies and if we don't have a match then add the movie to the bookMarkedMovies. If we do have a match the setState to true
    dispatch(addBookMark(bookMarked));
  };

  return (
    <CardContainer>
      <IconContainer onClick={() => saveBookMark(movie)}>
        <BookMarkFill />
      </IconContainer>
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
