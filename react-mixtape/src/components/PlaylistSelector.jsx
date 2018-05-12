import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './playlistSelector.css';

const PlaylistSelector = ({ playlists }) => (
    <menu className={styles.container}>
    { playlists.map(pl => <div key={pl.id}>
        <Link to={pl.id}>{pl.name}</Link></div>) }
    </menu>
);

PlaylistSelector.propTypes = {
    playlists: PropTypes.array.isRequired
};

export default PlaylistSelector;
