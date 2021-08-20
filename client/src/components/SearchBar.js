import React from 'react';

function SearchBar() {
  return (
    <form>
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
