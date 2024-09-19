
import { useGetAllMoviesQuery, useGetTopMoviesQuery } from '../../../redux/api/movieApiSlice.js';
import { useGetMyOrdersQuery } from '../../../redux/api/orderApiSlice.js';
import './UserHome.css';
import Slider from 'react-slick';
import { Container, Row, Col} from 'react-bootstrap';
import MovieCarousel from '../Movies/MovieCarousel.jsx';

 const UserHome = () => {
   
 const {data:movies,isLoading,isError} = useGetAllMoviesQuery();
 const {data:myorders} = useGetMyOrdersQuery();
 const {data:topmovies} = useGetTopMoviesQuery();

 const usermovies = myorders && myorders.length > 0 
  ? myorders
      .flatMap(order => order.orderItems)
      .map(item => item.movie)
  : [];

   const settings = {
     dots: true,
     infinite: true, 
     speed: 500, 
     slidesToShow: 4, 
     slidesToScroll: 1, 
     autoplay: true, 
     autoplaySpeed: 100,
     responsive: [
       {
         breakpoint: 1024, 
         settings: {
           slidesToShow: 2, 
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 600, 
         settings: {
           slidesToShow: 1, 
           slidesToScroll: 1,
         },
       },
     ],
   };
   if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !movies) {
    return <div>Error loading movies</div>;
  }

   return (
    
    <Container className="mt-3">
       <Slider {...settings}>
          {topmovies?.map((movie) => (
            <div key={movie._id} className="movie-slide">
              <img
                className="movie-image"
                src={movie.image}
                alt={`${movie.moviename} Poster`}
              />
            </div>
          ))}
    </Slider>
    
          <Row  className="mb-3 mt-4">
            <Col xs={12}>
              <h5>My Movies</h5>
            </Col>
            <Col xs={12}>
              {usermovies.length > 0 ? (
                <MovieCarousel filteredMovies={usermovies}/>
              ) : (
                <p>No movies purchased</p>
              )}
            </Col>
          </Row>
        
    
    </Container>
   );
 };


export default UserHome;