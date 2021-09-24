import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({
  name,
  image,
  rating,
  metacritic,
  featuredListData,
  setFeaturedListData
}) => {
  return (
    <div className='gameCard'>
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
      <img src={image} />
      {/* <p>Rating: {rating}</p> */}
      {/* <p>Metacritic: {metacritic ? metacritic : 'Not available'}</p> */}
      <button
        onClick={() => {
          setFeaturedListData([...featuredListData, { name }]);
        }}
      >
        Add to list
      </button>
    </div>
  );
};

export default GameCard;
