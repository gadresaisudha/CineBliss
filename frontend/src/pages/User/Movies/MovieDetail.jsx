import React from 'react';
import {Card,Row,Col,Container} from 'react-bootstrap';
import {Link,useParams} from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../../redux/api/movieApiSlice';
import './MovieDetail.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';

function MovieDetail({}) {

    const { id: movieId,isLoading,error } = useParams();
    const {data:movie} = useGetMovieByIdQuery(movieId);
    console.log(movie);
     
  
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
    <Container className="movie-detail-container">
    {movie ? (
      <Card>
        <Row className='movie-detail-row'>
          <Col md={1} className="image-col">
            <Card.Img className="movie-image" src={movie.image} alt={movie.title} />
          </Col>
          <Col md={11} className="details-col">
            <Card.Body>
             <Card.Title style={{fontSize:'48px'}}>
              {movie.moviename}
              <Button className='movie-detail-btn' onClick={()=>addToCartHandler(movie)}>
                Add to Cart
              </Button>
              </Card.Title>
             <Card.Text style={{fontSize:'25px'}}>Overview</Card.Text>
              <Card.Text style={{fontSize:'18px'}}>{movie.description}</Card.Text>
              <Row className='movie-detail-inside-row'>
                <Col className='details-col' md={3}>
                <Card.Text>Genre: {movie.genre}</Card.Text>
                <Card.Text>Category: {movie.category}</Card.Text>
                <Card.Text>Language: {movie.language}</Card.Text>
                </Col>
                <Col className='details-col'  md={3}>
                <Card.Text>Director: {movie.director}</Card.Text>
                <Card.Text>Actor: {movie.hero}</Card.Text>
                <Card.Text>Actress: {movie.heroine}</Card.Text>
                </Col>
                <Col className='details-col'  md={3}>
                <Card.Text>Price: {movie.price}</Card.Text>
                <Card.Text>Rating: {movie.overallrating}</Card.Text>
                <Card.Text>Reviews: {movie.numReviews}</Card.Text>
                </Col>
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