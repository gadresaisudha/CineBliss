import {Card,Row,Col,Container} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../../redux/api/movieApiSlice';
import './MovieDetail.css';
import MovieCard from './MovieCard';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';
import { useGetMyOrdersQuery } from '../../../redux/api/orderApiSlice';
function MovieDetail({}) {

    const { id: movieId,isLoading,error } = useParams();
    const {data:movie} = useGetMovieByIdQuery(movieId);
    const {data:myorders} = useGetMyOrdersQuery();
    const usermovies = myorders && myorders.length > 0 
      ? myorders
          .flatMap(order => order.orderItems)
          .map(item => item.movie)
      : [];
     
  
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error loading movie details. Please try again later.</p>;
      }

    const dispatch = useDispatch();
    const addToCartHandler = (movie)=>{
      dispatch(addToCart({...movie}));
      toast.success("Item added Successfully")
    }

   return(
    <Container className='mt-5'>
    {movie ? (
      <Card className='p-4'>
        <Row>
          <Col md={3} className='p-2'>
            <MovieCard movie={movie} />
          </Col>
          <Col md={8}>
            <Card.Body>
             <Card.Title style={{fontSize:'48px'}}>
              {movie.moviename}
              </Card.Title>
             
             <Card.Text style={{fontSize:'25px'}}>Overview</Card.Text>
              <Card.Text style={{fontSize:'18px'}}>{movie.description}</Card.Text>
              <Row>
                <Col md={4}>
                <Card.Text>Genre: {movie.genre}</Card.Text>
                <Card.Text>Category: {movie.category}</Card.Text>
                <Card.Text>Language: {movie.language}</Card.Text>
                </Col>
                <Col  md={4}>
                <Card.Text>Director: {movie.director}</Card.Text>
                <Card.Text>Actor: {movie.hero}</Card.Text>
                <Card.Text>Actress: {movie.heroine}</Card.Text>
                </Col>
                <Col  md={4}>
                <Card.Text>Price: {movie.price}</Card.Text>
                <Card.Text>Rating: {movie.overallrating}</Card.Text>
                <Card.Text>Reviews: {movie.numReviews}</Card.Text>
                </Col>
              </Row>
              <Row className='mt-2'>
              <button type='submit' className='movie-detail-btn' onClick={()=>addToCartHandler(movie)}
               disabled={usermovies.some(userMovie => userMovie._id === movie._id)}  >
              {usermovies.some(userMovie => userMovie._id === movie._id) ? 'Already Purchased' : 'Buy'}
              </button>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    ) : (
      <p>Movie not found.</p>
    )}
  </Container>
   )
}

export default MovieDetail;