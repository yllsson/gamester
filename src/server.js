const fetchGames = require('./utils/fetchGames');
const express = require('express');
const app = express();
const port = 3000;

app.get('/games', (req, res) => {
  fetchGames(res);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
