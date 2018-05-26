import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './playlistSelector.css';

const PlaylistSelector = ({ playlists }) => (
    <div className={styles.container}>
        <h1>Your Playlists</h1>
        <menu>
        { playlists.map(pl => <div key={pl.id}>
            <Link to={pl.id}>{pl.name}</Link></div>) }
        </menu>
    </div>
);

PlaylistSelector.propTypes = {
    playlists: PropTypes.array.isRequired
};

export default PlaylistSelector;
