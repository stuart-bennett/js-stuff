import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.css';

const Search = ({ searchTerm, onChange, onClear }) => (
    <div>
        <input
            className={styles.searchBox}
            type="text"
            placeholder="Find & add new tracks..."
            value={searchTerm}
            onChange={evt => onChange(evt.target.value) }
        />
        <button onClick={onClear}>Clear</button>
    </div>
);

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
};

export default Search;

