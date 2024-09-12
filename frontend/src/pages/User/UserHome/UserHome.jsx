
import { useGetAllMoviesQuery } from '../../../redux/api/movieApiSlice.js';
import { Carousel } from 'react-bootstrap';
import './UserHome.css';
function UserHome() {

 const {data:movies,isLoading,isError} = useGetAllMoviesQuery();

  return (
    <>
      
      <Carousel className='mt-4'>
      {movies?.map((movie) => (    
          <Carousel.Item interval={1000}  key={movie._id}>
            <div className="image-wrapper">
            <img
              className="d-block movie-image"
              src={movie.image}
              alt={`${movie.moviename} Poster`}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

    </>
  )
}

export default UserHome;