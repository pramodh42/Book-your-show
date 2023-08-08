import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from './MoviesContext'; 
import { useState } from 'react'; 

import '../Css/MoviePopup.css'
import {useNavigate} from 'react-router'
import BookingForm from './BookingForm';
const MoviePopup = () => {
  const { movies, setMovies } = useMovies();
  const { id } = useParams();
  const movie = movies.find(movie => movie.show.id === parseInt(id));
  const [showForm, setShowForm] = useState(false);
  const history=useNavigate();
  const handleBookTickets = () => { 
    setShowForm(true);
  };
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="popup-overlay">
          <div className="popup">
            <div className="popup-header">
              <button className="close-button" onClick={()=>history(-1)}>
                &times;
              </button>
            </div>
            <div className="popup-content">
              <div className="left-content">
                <img src={movie.show.image&&movie.show.image.medium} alt={movie.show.name} className="movie-imag" />
              </div>
              <div className="right-content">
                <div className="movie-summary" dangerouslySetInnerHTML={{ __html: movie.show.summary }}/>
              <div className='movie-inf'>
              <p><strong>Release Date:</strong> {movie.show.premiered}</p>
              
              <p><strong>Runtime</strong>  {movie.show.runtime || 'N/A'} minutes</p>
              <p><strong>Genres:</strong>{movie.show.genres.join(', ')}</p>
              <p><strong>Rating:</strong>{movie.show.rating.average || 'N/A'}</p>
              </div>
                <button className="book-button"   onClick={() => 
    setShowForm(true)}>Book Tickets</button>

              </div>
              {showForm && <BookingForm movie={movie} closepopup={() => setShowForm(false)} />}
    
            </div>
          </div>
        </div>
  );
};

export default MoviePopup;
