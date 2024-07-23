import React from 'react';
import { useGetAllMoviesQuery ,useCreateMoviesMutation} from '../../../redux/api/movieApiSlice';

function AdminMovies() {

    const {data:movies,isLoading,isError} = useGetAllMoviesQuery();
    return (
      <>
        {/* List of movies*/ }
        <div>
         {movies?.map((movie)=>( 
          <div key={movie._id}>
          <div>
            {movie?.moviename}
          </div> 
          <div>
            {movie?.category}
          </div>
          <div>
            {movie?.hero}
          </div>
          <div>
            {movie?.heroine}
          </div>
          <div>
            {movie?.director}
          </div>
          <div>
            {movie?.price}
          </div>

          </div>
         ))}
        </div>
      </>
    )
}

export default AdminMovies;