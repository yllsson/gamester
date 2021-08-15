import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

function GamesterApp() {
  const [gameData, setGameData] = useState('');

  const fetchGames = async () => {
    const res = await fetch('/games');
    const data = await res.json();

    setGameData(data.results);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <main>
      <h1>Gamester</h1>
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
}

export default GamesterApp;
