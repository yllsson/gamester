const request = require('postman-request');
const apiKey = process.env.RAWG_API_KEY;

const fetchGames = async function (searchText) {
  let url = `https://api.rawg.io/api/games?key=${apiKey}&platforms=1,2,3,4,7,18,186,187&ordering=-added`;

  if (searchText) {
    url += `&search=${searchText}`;
  } else {
    url += `&dates=2021-01-01,2021-10-01`;
  }

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
