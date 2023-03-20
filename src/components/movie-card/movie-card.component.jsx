import React from "react";
import "./movie-card.styles.scss";

function getYear(str) {
  return str.slice(0, 4);
}

export const MovieCard = (props) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="movie-card">
      <div>
        <div className="poster-container">
          <img
            className="poster"
            src={
              "https://image.tmdb.org/t/p/original" +
              props.movieData.backdrop_path
                ? `${baseImageUrl}${props.movieData.backdrop_path}`
                : `${props.movieData.poster_path}`
            }
            alt="movie_poster.jpg"
          ></img>
          <div className="overlay text-light">
            <div className="movie-detail">
              <span className="label text-secondary">Overview:</span>
              <p className="value">{props.movieData.overview}</p>
            </div>
          </div>
        </div>
        <div className="text-start">
          <span className="text-light movie-name">
            {props.movieData.title.toUpperCase()}
            <sup className="release-date">
              {getYear(props.movieData.release_date)}
            </sup>
          </span>
        </div>
      </div>
    </div>
  );
};
