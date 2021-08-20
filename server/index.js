const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const fetchGames = require('./utils/fetchGames');

app.get('/games', async (req, res) => {
  const result = await fetchGames();
  res.send({
    result
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
