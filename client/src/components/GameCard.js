import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ name, image, rating, metacritic }) => {
  return (
    <div>
      <h2>
        <Link
          to={{
            pathname: `/details/${name}`,
            state: {
              name,
              image
            }
          }}
        >
          {name}
        </Link>
      </h2>
      <img src={image} width='200px' />
      <p>Rating: {rating}</p>
      <p>Metacritic: {metacritic ? metacritic : 'Not available'}</p>
    </div>
  );
};

export default GameCard;
