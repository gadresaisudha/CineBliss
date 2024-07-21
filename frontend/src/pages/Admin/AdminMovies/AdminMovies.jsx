import React from 'react';
import { useGetAllMoviesQuery ,useCreateMoviesMutation} from '../../../redux/api/movieApiSlice';
function AdminMovies() {

    const {data:movies,isLoading,isError} = useGetAllMoviesQuery();

    return (
      <>
        {/* create movie button*/ }
        <button type='submit'>Create Movie</button>






        {/* List of movies*/ }
        <div>
         {movies?.map((movie)=>( 
          <div key={movie._id}>
          <div>
            {movie?.moviename}
          </div>
          
          <div>
            {movie?.description}
          </div>
  
          <div>
            {movie?.category}
          </div>
          </div>
         ))}
        </div>
      </>
    )
}

export default AdminMovies;