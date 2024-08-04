import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './MovieCard.css';

function MovieCard({movie}) {

  
    return (
      
          <Link to = {`/movies/${movie._id}`}> 
          <Card>
            <Card.Img variant="top" src={movie?.image} style={{ width: '15rem', margin: '0 auto' }} />
          </Card> 
        </Link>
    )
}

export default MovieCard;