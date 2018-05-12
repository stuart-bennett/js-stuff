import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchResults.css';

const getPrimaryArtist = artists => artists[0].name;

const SearchResults = ({ results }) => (
    <ul className={styles.container}>
        { results.map(r =>
            <li key={r.id}>
                <img src={r.image} alt={`Track artwork for ${r.songTitle}`} />
                <div className={styles.details}>
                    <h2 className={styles.songName}>{r.songTitle}</h2>
                    <h3 className={styles.artist}>{ getPrimaryArtist(r.artists) }</h3>
                </div>
            </li>
        )}
    </ul>
);

SearchResults.propTypes = {
    results: PropTypes.array.isRequired
}

export default SearchResults;
