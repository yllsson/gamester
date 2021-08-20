import React from 'react';

function SearchBar({ getSearchGames }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getSearchGames(e.target.searchInput.value);
      }}
    >
      <input
        type='text'
        id='searchInput'
        name='searchInput'
        placeholder='Type your game here'
        aria-label='Type your game here'
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchBar;
