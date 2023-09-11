
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Poster from '../assets/poster.svg'
import Logo from '../assets/logo.png'
import hamButton from '../assets/ellipse.png'
import imbdLogo from '../assets/imbd.png'
import rottenTomatoesLogo from '../assets/rotten-tomatoes.png'
import MovieCard from '../components/MovieCard';
import { Container } from '@mui/material';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import {toast} from 'react-toastify';
function HomePage() {
const [posterMovieData, setPosterMovieData] = useState(null)
const [topMovies, setTopMovies] = useState([])
const [Loading, setLoading] = useState(true)


    useEffect(()=> {
        const fetchPoster = async () => {
            try {
                const apiKey = '7a529b24ef789e4a50de476f2a2bbd35'
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?query=John+Wick&api_key=${apiKey}`
                
                )
                
                // console.log(response.data);
                setPosterMovieData(response.data.results[3])
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        fetchPoster()
    }, [])

    useEffect(() => {
      const fetchTopMovies = async () => {
        try {
          const apiKey = '7a529b24ef789e4a50de476f2a2bbd35';
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`,
            
          );
          const top10Movies = response.data.results.slice(0, 10);
          console.log(top10Movies);
          setTopMovies(top10Movies);
          // toast.success('Top 10 movies fetched successfully.')
        } catch (error) {
          console.error('Error fetching top movies:', error);
          toast.error('An error occurred , try again later.');
          
        }
      };
      
      fetchTopMovies();
    }, []);
    
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
       <div style={{width: '100%', height: '25rem' ,  backgroundImage: `url(${Poster})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
       <header>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 5rem 5rem 5rem'}}>
          <img src={Logo} alt="" />
          <input type="text" placeholder='What do you want to watch?' style={{border: '3px solid white', backgroundColor: 'transparent',  width: "45rem", borderRadius: '1rem', height: '1.5rem', padding: '0.5rem 1rem', color: 'white' , textTransform: 'capitalize'}}/>
          <img src={hamButton} alt="" />
        </div>
        { posterMovieData ? (
          <Container>
           <h2 style={{color: 'white', textAlign: 'left', width: '20rem', paddingLeft: '5rem'}}>{posterMovieData.title}</h2>
           <div style={{display: 'flex', width:'13rem', justifyContent: 'space-between', paddingLeft: '5rem'}}>
            <img src={imbdLogo} alt="" />
            <img src={rottenTomatoesLogo} alt="" />
           </div>
        <p style={{color: 'white', textAlign: 'left',  width: '20rem', fontSize:'.7rem', paddingLeft: '5rem'}}>{posterMovieData.overview}</p>
        </Container>
        ) 
        :
        (
          <p style={{color: 'white'}}>loading....</p>
        )}
       
       </header>
       <main style={{marginTop: '5rem'}}>
       <Container >
      <h1 style={{textAlign: 'left', fontSize: '1.2rem', marginBottom: '1rem'}}>Top 10 Movies</h1>
      {Loading ? 
       (<Spinner/>) :
       (<Container style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem'}}>
       {topMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
       ))}
     </Container>
   )}
   </Container>
      
       </main>
       <Footer/>
       </div>
       
    </div>
  )
}

export default HomePage