import React from 'react' 
import { useState } from 'react';
import '../Css/MovieCard.css' 
import MoviePopup from './MoviePopup';


const MovieCard = ({movie}) => {
  const [showPopup, setShowPopup] = useState(false);
 
  const handleMovieCardClick = () => {
    setShowPopup(!showPopup);
  };
      return ( 
        <>
              {/* {showPopup && <MoviePopup closeModal={() => setShowPopup(false)} />} */}

        <div className="movie-card" onClick={handleMovieCardClick}>
          <a href="#" className="card-link">
            <div className="movie-image">
              <img src={movie.show.image&&movie.show.image.medium} alt={movie.show.name} />
            </div> 

            { movie.show.rating.average? <strong><div className="movie-rating">{movie.show.rating.average}<span className='star'>★</span>/10</div></strong> :<></> }
            <div className='movie-info'>
        <strong> <div className="movie-name">{movie.show.name}</div> </strong>
         <br></br>
        <div className="movie-genres">{movie.show.genres.join('/ ')}</div>
       </div>

          </a>
        </div>
        </>
      );
    };


export default MovieCard;


