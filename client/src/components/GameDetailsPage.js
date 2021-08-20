import React from 'react';
import { useLocation } from 'react-router-dom';

const GameDetailsPage = () => {
  const location = useLocation();
  const { name, image } = location.state;
  return (
    <div>
      <h2>{name}</h2>
      <p>Tons of information about {name}</p>
      <img src={image} width='300px' />
    </div>
  );
};

export default GameDetailsPage;
