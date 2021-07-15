import { useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import AllMovies from "./components/AllMovies";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import NewMovie from "./components/NewMovie";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/movies"
          render={(props) => <AllMovies {...props} />}
        />

        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/movies/:id"
          render={(props) => <MovieDetails {...props} />}
        />
        <Route
          exact
          path="/movies/create"
          render={(props) => <NewMovie {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
