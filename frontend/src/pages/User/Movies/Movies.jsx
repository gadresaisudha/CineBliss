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
    
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError || !movies) {
        return <div>Error loading movies</div>;
      }
    

    return (
        <div className='movies-list'>
        <Carousel responsive={responsive}>
         
            {movies?.map((movie) => (         
            <div key={movie._id}>
            <MovieCard image={movie.image} />
            </div>             
               
             ))}
        </Carousel>
        </div>
    )
}

export default Movies;