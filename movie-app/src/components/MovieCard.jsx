import React, { useState, useEffect } from 'react';
import { Card, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(movie.id));
  }, [movie.id]);

 
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
    
      const updatedFavorites = favorites.filter((id) => id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      
      favorites.push(movie.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={`/movies/${movie.id}`}
      style={{ textDecoration: 'none' }}
      onClick={(e) => {
        
        if (e.target.closest('.favorite-icon')) {
          e.preventDefault();
          toggleFavorite();
        }
      }}
    >
      <Card className="movie-card" data-testid="movie-card" style={{ position: 'relative' }}>
        <IconButton
        size='small'
          className="favorite-icon"
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            backgroundColor: 'white',
             cursor: 'pointer' 
          }}
          onClick={toggleFavorite}
        >
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          data-testid="movie-poster"
          style={{ height: '15rem', width: '100%' }}
        />
        <p
          data-testid="movie-release-date"
          style={{
            color: 'gray',
            fontSize: '.6rem',
            textAlign: 'left',
            marginLeft: '5px',
          }}
        >
          {movie.release_date}
        </p>
        <h2
          data-testid="movie-title"
          style={{ fontSize: '.8rem', textAlign: 'left', marginLeft: '5px' }}
        >
          {movie.title}
        </h2>
      </Card>
    </Link>
  );
}

export default MovieCard;
