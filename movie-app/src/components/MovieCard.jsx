import React from 'react'
import {Card} from '@mui/material'
function MovieCard({movie}) {
  return (
    
   
        <Card className="movie-card" data-testid="movie-card">
            
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
        style={{height: '15rem', width: '100%'}}
      />
      <p data-testid="movie-release-date" style={{color: 'gray', fontSize: '.8rem',  textAlign: 'left', marginLeft: '5px'}}>{movie.release_date}</p>
      <h2 data-testid="movie-title" style={{fontSize: '1rem', textAlign: 'left', marginLeft: '5px'}}>{movie.title}</h2>
      
    </Card>
  )
}

export default MovieCard