import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link,useParams} from 'react-router-dom';


function MovieDetail({}) {

    const { id: movieId } = useParams();
    return (
      
    
          <div>
           {movieId}
          </div>
      
      
    )
}

export default MovieDetail;