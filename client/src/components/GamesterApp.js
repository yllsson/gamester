import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

const GamesterApp = () => {
  const [gameData, setGameData] = useState(null);

  const fetchGames = () => {
    fetch(`/games`)
      .then((res) => {
        if (!res.ok) {
          console.log('Unable to fetch data');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setGameData(data);
      });
  };

  useEffect(() => {
    fetchGames();
    console.log(gameData);
  }, []);

  return (
    <main>
      <h1>Gamester</h1>
      {!gameData ? (
        <h2>loading...</h2>
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

export default GamesterApp;
