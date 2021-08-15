const request = require('postman-request');

const fetchGames = async function () {
  const url = `https://api.rawg.io/api/games?key=14431a81669b494494dfb2bdf2b8e72a&page-size=3&platforms=1,2,3,4,7,18,186,187&ordering=-added&dates=2021-01-01,2021-10-01`;

  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, { body }) => {
      if (error) {
        console.log('Error: ', error);
        reject(error);
      } else {
        resolve(body.results);
      }
    });
  });
};

module.exports = fetchGames;
