import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => (
    <ul>
        { results.map(r => <li key={r.id}>{r.songTitle}</li>) }
    </ul>
);

SearchResults.propTypes = {
    results: PropTypes.array.isRequired
}

export default SearchResults;
