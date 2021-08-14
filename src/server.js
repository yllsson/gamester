const fetchGames = require('./utils/fetchGames');
const express = require('express');
const app = express();
const port = 8000;

app.get('/games', (req, res) => {
  // 14/08 - Trying to figure out why my fetch isn't working... It's clearly logging correctly in the console but it does not show up on port/games! Gotta continue on next time.
  const test = fetchGames();
  res.send({
    results: test
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
