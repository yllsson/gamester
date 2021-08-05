import React, { useState, useEffect } from 'react';

const GamesterApp = () => {
  const [gameData, setGameData] = useState();

  const myFetch = async () => {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=14431a81669b494494dfb2bdf2b8e72a&search=${encodeURIComponent(
        game
      )}`
    );
    const data = await res.json();
    console.log(data.results[0].metacritic);

    info.innerText = data.results[0].name;
    ratingInfo.innerText = data.results[0].metacritic;
  };

  //   const searchForm = document.getElementById('searchForm');
  // const info = document.getElementById('info');
  // const ratingInfo = document.getElementById('rating');

  // useEffect((arguments) => {
  //   setGameData(myFetch())
  // }, [])

  return (
    <main>
      <h1>Gamester</h1>

      <form
        // onSubmit={(event) => {
        //   event.preventDefault();
        //   const searchInput = document.getElementById('searchInput');
        //   myFetch(searchInput.value);
        // }}
        id='searchForm'
      >
        <input id='searchInput' type='text' placeholder='Game' />
        <button>Submit</button>
      </form>
      <h2 id='info'>Name of the game</h2>
      <h2>Metascore:</h2>
      <p id='rating'>Rating</p>
    </main>
  );
};

export default GamesterApp;
