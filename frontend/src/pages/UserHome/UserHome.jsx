import { useState } from 'react'
import React from 'react';
import './UserHome.css'
import { useGetAllMoviesQuery } from '../../redux/api/movieApiSlice.js';

function UserHome() {

 const {data:movies,isLoading,isError} = useGetAllMoviesQuery();

  return (
    <>
      <div>
       {movies?.map((movie)=>( 
        <div key={movie._id}>
        <div>
          {movie?.moviename}
        </div>
        
        <div>
          {movie?.description}
        </div>
        </div>
       ))}
      </div>
    </>
  )
}

export default UserHome;