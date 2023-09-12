import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Container } from '@mui/material';
import NavBar from '../components/NavBar';

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatToUTCDate = (dateString) => {
    const localDate = new Date(dateString);
    const utcDate = new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60000);
    return utcDate.toISOString().split('T')[0];;
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '7a529b24ef789e4a50de476f2a2bbd35';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
        );
        const formattedDate = formatToUTCDate(response.data.release_date);

        
        const updatedMovieDetails = { ...response.data, release_date: formattedDate };
        setMovieDetails(updatedMovieDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);  
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <NavBar/>

        <>
        {loading ? (
        <Spinner />
      ) : movieDetails ? (
        <Container>
        <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
        style={{ height: '15rem', width: 'auto' }}
                    data-testid="movie-poster"
                />
          <h1 data-testid="movie-title">{movieDetails.title}</h1>
          <p data-testid="movie-release-date">{movieDetails.release_date}</p>
          <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
          <p data-testid="movie-overview">{movieDetails.overview}</p>
        </Container>
      ) : (
        <p>Error loading movie details.</p>
      )}
        </>
      
    </div>
  );
}

export default MovieDetails;
