import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
