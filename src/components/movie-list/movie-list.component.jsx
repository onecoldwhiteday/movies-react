import React from "react";
import { MovieCard } from "../movie-card/movie-card.component";
import "./movie-list.styles.scss";

export const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <div className="movie-list">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movieData={movie}></MovieCard>;
        })}
      </div>
    </div>
  );
};
