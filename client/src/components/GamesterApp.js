import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

function GamesterApp() {
  const [gameData, setGameData] = useState('');

  const fetchGameData = async () => {
    const res = await fetch('/games');
    if (!res.ok) {
      console.log('Unable to fetch data. Error:', res.status, res.statusText);
    } else {
      const data = await res.json();
      console.log(data);

      setGameData(data.result);
    }
  };

  useEffect(() => {
    fetchGameData();
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
