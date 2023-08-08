import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { useMovies } from './MoviesContext';
import '../Css/MovieList.css'
const MovieList = () => {
  const { movies, setMovies } = useMovies();
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/details/${movie.show.id}`} key={movie.show.id} className="movie-link">
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
