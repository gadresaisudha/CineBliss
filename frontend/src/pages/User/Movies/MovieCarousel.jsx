import Carousel from "react-multi-carousel";
import MovieCard from './MovieCard';
import './Movies.css';

function MovieCarousel({filteredMovies}) {

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


    return (
        <Carousel responsive={responsive} itemClass="carousel-item-padding">
        {filteredMovies.map(movie => (
          <div key={movie._id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </Carousel>
    )
}

export default MovieCarousel;