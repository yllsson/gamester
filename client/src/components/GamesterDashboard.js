import React, { useState, useEffect } from 'react';
import FeaturedList from './FeaturedList';
import GameCard from './GameCard';
import SearchBar from './SearchBar';

const GamesterDashboard = () => {
  const [gameData, setGameData] = useState('');
  const [error, setError] = useState('');

  const fetchGameData = async () => {
    const res = await fetch('/games');

    if (!res.ok) {
      console.log('Unable to fetch data. Error:', res.status, res.statusText);
    } else {
      const data = await res.json();

      setGameData(data.games);
    }
  };

  const getSearchGames = async (searchText) => {
    const res = await fetch(
      `/games/search?search=${encodeURIComponent(searchText)}`
    );
    const data = await res.json();
    if (data.error) {
      return setError(data.error);
    } else {
      setError('');
    }
    setGameData(data.games);
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <main>
      <SearchBar getSearchGames={getSearchGames} />

      <section className='featuredContainer'>
        <div className='featuredGames'>
          {error ? <h2>{error}</h2> : ''}
          {!gameData ? (
            <h2>Loading...</h2>
          ) : (
            gameData.map((game, index) => {
              return (
                <GameCard
                  name={game.name}
                  image={game.background_image}
                  rating={game.rating}
                  metacritic={game.metacritic}
                  key={index}
                />
              );
            })
          )}
        </div>

        <FeaturedList />
      </section>
    </main>
  );
};

export default GamesterDashboard;
