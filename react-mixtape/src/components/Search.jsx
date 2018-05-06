/* eslint-disable no-console */
import React from 'react';

const Search = () => (
    <input
        type="text"
        placeholder="Find & add new tracks..."
        onChange={evt => console.log(evt.target.value) }
    />
);

export default Search;

