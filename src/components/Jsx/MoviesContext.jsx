import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // Fetch movies from the API
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json()) 
     
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  // console.log(movies);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  return useContext(MoviesContext);
}
