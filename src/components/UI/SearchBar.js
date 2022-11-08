import React, { useState } from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // if (searchInput.length > 0) {
  //   countries.filter((country) => {
  //     return country.name.match(searchInput);
  //   });
  // }

  const searchHandler = () => {};

  return (
    <div className={classes.search}>
      <form onSubmit={searchHandler}>
        <input
          type="search"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </form>
    </div>
  );
};

export default SearchBar;
