import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";

function AllMovies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/movies`).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  const showAllMovies = () => {
    return movies.map((eachMovie) => {
      return (
        <div>
          <div>
            <img src={eachMovie.image} />
          </div>
          <h2>{eachMovie.title}</h2>
          <Link to={`/movies/${eachMovie._id}`}>See More</Link>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Ironhack Cinema</h1>
      <p>Click on the movie to check the showtimes</p>
      <button onClick={() => props.history.push("/")}>Back to movies</button>
      <div>{showAllMovies()}</div>
    </div>
  );
}

export default AllMovies;
