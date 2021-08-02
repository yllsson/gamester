const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const info = document.getElementById('info');
const ratingInfo = document.getElementById('rating');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  myFetch(searchInput.value);
});

const myFetch = async (game) => {
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
