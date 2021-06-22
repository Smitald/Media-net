import React, { useState, Fragment } from 'react';
const SearchBar = ({ setValue, placeholder }) => {
  const [query, setQuery] = useState('');

  const handleFilterChange = e => {
    setQuery(e.target.value)
    setValue(e.target.value)
  }
  return (
    <Fragment>
   
      <input 
        value={query}
        placeholder={placeholder}
        onChange={handleFilterChange}
        id="search"
      />
   
    </Fragment>
  );
}

export default SearchBar;
