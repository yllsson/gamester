const request = require('postman-request');

const fetchGames = () => {
  const url = `https://api.rawg.io/api/games?key=14431a81669b494494dfb2bdf2b8e72a&page-size=3&platforms=1,2,3,4,7,18,186,187&ordering=-added&dates=2021-01-01,2021-10-01`;

  request({ url, json: true }, (error, { body }) => {
    // 14/08 - Trying to figure out why my fetch isn't working... Gotta continue on next time.
    if (error) {
      console.log('Error: ', error);
    } else {
      const games = body.results;
      console.log(games);
      return games;
    }
  });
};

module.exports = fetchGames;
