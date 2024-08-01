import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function MovieCard({movie}) {

  
    return (
      
          <Link to = {`movie/${movie._id}`}> 
          <Card className="text-center">
            <Card.Img variant="top" src={movie?.image} style={{ width: '10rem', margin: '0 auto' }} />
          </Card> 
        </Link>
    )
}

export default MovieCard;