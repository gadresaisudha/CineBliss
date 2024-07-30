import React from 'react';
import Card from 'react-bootstrap/Card';

function MovieCard(props) {

  
    return (
      
    
          <Card className="text-center">
            <Card.Img variant="top" src={props?.image} style={{ width: '10rem', margin: '0 auto' }} />
          </Card>
      
      
    )
}

export default MovieCard;