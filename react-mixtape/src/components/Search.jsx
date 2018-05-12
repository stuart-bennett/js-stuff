import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.css';

const Search = ({ onChange }) => (
    <input
        className={styles.searchBox}
        type="text"
        placeholder="Find & add new tracks..."
        onChange={evt => onChange(evt.target.value) }
    />
);

Search.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Search;

