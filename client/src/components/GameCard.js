import React from 'react';

const GameCard = ({ name, image, rating, metacritic }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} width='200px' />
      <p>Rating: {rating}</p>
      <p>Metacritic: {metacritic ? metacritic : 'Not available'}</p>
    </div>
  );
};

export default GameCard;
