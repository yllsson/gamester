const request = require('postman-request');
const apiKey = process.env.RAWG_API_KEY;

const fetchGames = async function () {
  const url = `https://api.rawg.io/api/games?key=${apiKey}&page-size=3&platforms=1,2,3,4,7,18,186,187&ordering=-added&dates=2021-01-01,2021-10-01`;

  //  To be used when I create a solution for search
  //  const searchurl = `https://api.rawg.io/api/games?key=${apiKey}&platforms=1,2,3,4,7,18,186,18&search=${searchText}`

  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, { body }) => {
      if (error) {
        console.log('Error: ', error);
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

module.exports = fetchGames;
