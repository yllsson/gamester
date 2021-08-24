import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import Header from './Header';
import SearchBar from './SearchBar';

const GamesterDashboard = () => {
  const [gameData, setGameData] = useState('');

  const fetchGameData = async () => {
    // saving this until I've figured out what's causing my backend connection issues
    const res = await fetch('/games');

    // const res = await fetch(
    //   `https://api.rawg.io/api/games?key=14431a81669b494494dfb2bdf2b8e72a&page-size=3&platforms=1,2,3,4,7,18,186,187&ordering=-added&dates=2021-01-01,2021-10-01`
    // );
    if (!res.ok) {
      console.log('Unable to fetch data. Error:', res.status, res.statusText);
    } else {
      const data = await res.json();

      setGameData(data.games);
    }
  };

  const getSearchGames = async (searchText) => {
    // to be sorted next time (comment written 21/08)
    const res = await fetch(`/games?search=${encodeURIComponent(searchText)}`);
    const data = await res.json();
    setGameData(data.results);
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <main>
      <SearchBar getSearchGames={getSearchGames} />

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
    </main>
  );
};

export default GamesterDashboard;
