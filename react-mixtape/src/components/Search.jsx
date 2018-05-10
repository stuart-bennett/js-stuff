/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => (
    <input
        type="text"
        placeholder="Find & add new tracks..."
        onChange={evt => onChange(evt.target.value) }
    />
);

Search.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Search;

