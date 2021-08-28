require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

const fetchGames = require('./utils/fetchGames');

app.get('/games', async (req, res) => {
  const result = await fetchGames();
  res.send({
    games: result.results
  });
});

app.get('/games/search', async (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Please enter game!'
    });
  }

  const result = await fetchGames(req.query.search);
  res.send({
    games: result.results
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
