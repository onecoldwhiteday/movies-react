import React, { useEffect, useState } from "react";
import API from "../api";
import { MovieList } from "../movie-list/movie-list.component";
import { Paginator } from "../paginator/paginator.component";
import { Sidebar } from "../sidebar/sidebar.component";
import "./movies-page.styles.scss";
import { useOutletContext } from "react-router-dom";

export const TabNamesEnum = {
  popular: "popular",
  topRated: "top-rated",
  upcoming: "upcoming",
  nowPlaying: "now-playing",
};

export const MoviesPage = ({ page }) => {
  const [movies, setMovies] = useState([]);
  const [isSidebarHidden, hideSidebar] = useOutletContext();

  const pages = {
    [TabNamesEnum.popular]: {
      title: "Popular",
      searchUrl: "discover/movie",
    },
    [TabNamesEnum.topRated]: {
      title: "Top rated",
      searchUrl: "movie/top_rated",
    },
    [TabNamesEnum.upcoming]: {
      title: "Upcoming",
      searchUrl: "movie/upcoming",
    },
    [TabNamesEnum.nowPlaying]: {
      title: "Now Playing",
      searchUrl: "movie/now_playing",
    },
  };

  function fetchMovies() {
    const params = {};
    API.get(pages[page].searchUrl, {
      params,
    }).then((res) => {
      return setMovies(res.data.results);
    });
  }

  useEffect(() => {
    fetchMovies();
  });

  return (
    <div className="movies-page-container">
      <Sidebar
        isHidden={isSidebarHidden}
        onClose={hideSidebar}
        activeTab={page}
      ></Sidebar>
      <h1 className="page-title font-weight-bold fs-75">{pages[page].title}</h1>
      <MovieList movies={movies}></MovieList>
      <Paginator></Paginator>
    </div>
  );
};
