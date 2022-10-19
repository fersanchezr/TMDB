import React from "react";
import { Link } from "react-router-dom";

const SearchMovies = ({ searchMovie }) => {
  return (

    <div className="colorGrid">
      {searchMovie.results ?
        searchMovie.results.map((movie, i) => (
          <div key={i}>
            <p>Title: {movie.title}</p>
            <Link to={`/search/${movie.id}`}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={270}
                  height={345}
                />
              </figure>
            </Link>
            <p> Release Date: {movie.release_date}</p>
            <hr />
          </div>
        )) : ""
      }
    </div>
  );
};

export default SearchMovies;
