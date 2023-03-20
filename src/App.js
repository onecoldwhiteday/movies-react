import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/layout/layout.component";
import { MoviesPage } from "./components/movies-page/movies-page.component";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="" element={<MoviesPage page="popular" />} />
              <Route
                index
                path="top-rated"
                element={<MoviesPage page="top-rated" />}
              />
              <Route
                index
                path="upcoming"
                element={<MoviesPage page="upcoming" />}
              />
              <Route
                index
                path="now-playing"
                element={<MoviesPage page="now-playing" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
