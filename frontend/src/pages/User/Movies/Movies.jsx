import React from 'react';
import { useGetAllMoviesQuery} from '../../../redux/api/movieApiSlice';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from './MovieCard';
import './Movies.css';

function Movies() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1500 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1500, min: 1250 },
          items: 8
        },
        tablet: {
          breakpoint: { max: 1250, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const {data:movies,isLoading,isError} = useGetAllMoviesQuery();
   
    const genres = [
      'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror',
      'Mystery', 'Romance', 'Thriller', 'Animated'
    ];
    
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError || !movies) {
        return <div>Error loading movies</div>;
      }
    

    return (
        <div className='movies-list'>
          {genres.map(genre => {
          const filteredMovies = movies.filter(movie => movie.genre === genre);
          return(
          <div key={genre}>
           {filteredMovies.length > 0 ? (
          <Carousel responsive={responsive}>
            {filteredMovies?.map((movie) => (         
            <div key={movie._id}>
            <MovieCard movie={movie} />
            </div>             
                
              ))}
           </Carousel>):(<p>None to display</p>)}
          </div>
          );
         })}
        </div>
    )
}

export default Movies;