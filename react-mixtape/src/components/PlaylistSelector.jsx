import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './playlistSelector.css';

const PlaylistSelector = ({ playlists }) => (
    <div className={styles.container}>
        <h1>Your Playlists</h1>
        <menu>
            <ul>
            { playlists.map(pl => <li key={pl.id}>
                <Link to={pl.id}>
                    <img src={pl.image} />
                    {pl.name}
                </Link>
            </li>) }
            </ul>
        </menu>
    </div>
);

PlaylistSelector.propTypes = {
    playlists: PropTypes.array.isRequired
};

export default PlaylistSelector;
