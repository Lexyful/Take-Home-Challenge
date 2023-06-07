
import React, { useState } from 'react';

const SearchBar = ({ news, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search articles"
      />
    </div>
  );
};

export default SearchBar;
