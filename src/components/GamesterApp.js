import React, { useState, useEffect } from 'react';

const GamesterApp = () => {
  const [gameData, setGameData] = useState([
    {
      name: 'Loading...'
    }
  ]);

  const fetchGames = () => {
    const games = fetch(
      `https://api.rawg.io/api/games?key=14431a81669b494494dfb2bdf2b8e72a&page-size=3&platforms=1,2,3,4,7,18,186,187&ordering=-added&dates=2021-01-01,2021-10-01`
    )
      .then((res) => {
        if (!res.ok) {
          console.log('Unable to fetch data');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setGameData(data.results);
        return data;
      });

    return games;
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <main>
      <h1>Gamester</h1>

      {gameData.map((game, index) => {
        return <p key={index}>{game.name}</p>;
      })}
    </main>
  );
};

export default GamesterApp;
