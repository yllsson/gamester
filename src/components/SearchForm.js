import React from 'react';

const SearchForm = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('searching');
      }}
    >
      <input id='searchInput' type='text' placeholder='Game' />
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
