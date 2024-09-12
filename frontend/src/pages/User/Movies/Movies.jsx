import React from 'react';
import { useGetAllMoviesQuery} from '../../../redux/api/movieApiSlice';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from './MovieCard';
import './Movies.css';
import { Container, Row, Col} from 'react-bootstrap';

function Movies() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1250 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1250, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
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
      <Container className="mt-3">
      {genres.map(genre => {
        const filteredMovies = movies.filter(movie => movie.genre === genre);
        return (
          <Row key={genre} className="mb-3">
            <Col xs={12}>
              <h5>{genre}</h5>
            </Col>
            <Col xs={12}>
              {filteredMovies.length > 0 ? (
                <Carousel responsive={responsive} itemClass="carousel-item-padding">
                  {filteredMovies.map(movie => (
                    <div key={movie._id}>
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>None to display</p>
              )}
            </Col>
          </Row>
        );
      })}
    </Container>
    )
}

export default Movies;