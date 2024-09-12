import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './MovieCard.css';

function MovieCard({movie}) {

  
    return (
      
          <Link to = {`/movies/${movie._id}`}> 
           <Card className='movie-card rounded'>
            <Card.Img
              variant="top"
              src={movie?.image}
            />
            
            {/*<Card.Body>
              <Card.Title className="movie-card-title">{movie?.moviename}</Card.Title>
            </Card.Body>*/}
      </Card>
        </Link>
    )
}

export default MovieCard;