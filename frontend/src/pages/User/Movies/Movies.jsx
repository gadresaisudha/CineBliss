import { useGetAllMoviesQuery} from '../../../redux/api/movieApiSlice';
import "react-multi-carousel/lib/styles.css";
import './Movies.css';
import { Container, Row, Col} from 'react-bootstrap';
import MovieCarousel from './MovieCarousel';

function Movies() {

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
                <MovieCarousel filteredMovies={filteredMovies}/>
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