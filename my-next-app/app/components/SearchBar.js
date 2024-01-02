// components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => (
    <div id="search-bar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <input type="text" id="search-input" placeholder="Write your name." />
        <button
            id="show-button"
            onClick={onSearch}
        >
            Show
        </button>
    </div>
);

export default SearchBar;
