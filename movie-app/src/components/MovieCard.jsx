import React from 'react'
import {Card} from '@mui/material'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  return (
    <Link to={`/movies/${movie.id}`} style={{textDecoration: 'none'}}>
      <Card className="movie-card" data-testid="movie-card">
            
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              data-testid="movie-poster"
              style={{height: '15rem', width: '100%'}}
            />
            <p data-testid="movie-release-date" style={{color: 'gray', fontSize: '.6rem',  textAlign: 'left', marginLeft: '5px'}}>{movie.release_date}</p>
            <h2 data-testid="movie-title" style={{fontSize: '.8rem', textAlign: 'left', marginLeft: '5px'}}>{movie.title}</h2>
            
            
          </Card>
    </Link>
    
  )
}

export default MovieCard