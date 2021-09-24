import React, { useState, useEffect } from 'react';
import FeaturedList from './FeaturedList';
import GameCard from './GameCard';
import SearchBar from './SearchBar';

const GamesterDashboard = () => {
  const [gameData, setGameData] = useState('');
  const [error, setError] = useState('');
  const [featuredListData, setFeaturedListData] = useState([]);

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
                  image={game.background_image}
                  metacritic={game.metacritic}
                  name={game.name}
                  key={index}
                  featuredListData={featuredListData}
                  setFeaturedListData={setFeaturedListData}
                  rating={game.rating}
                />
              );
            })
          )}
        </div>

        <FeaturedList featuredListData={featuredListData} />
      </section>
    </main>
  );
};

export default GamesterDashboard;
