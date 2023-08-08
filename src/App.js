import './App.css'; 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/Jsx/MovieList';
import Navbar from './components/Jsx/Navbar'; 
import MoviePopup from './components/Jsx/MoviePopup';
import { MoviesProvider } from './components/Jsx/MoviesContext';
function App() {
  
  return (
    <MoviesProvider>
      <Navbar/>
    <Router> 
    <div className="App"> 
      
      <Routes>
      <Route  path="/" element= {<MovieList/>} />
          <Route path="/details/:id" element={ <MoviePopup/>} />
      </Routes>
    </div>
  </Router>
  </MoviesProvider>
  )
  ;
}

export default App;
