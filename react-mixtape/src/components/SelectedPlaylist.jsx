/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import OverlayImage from './OverlayImage.jsx';
import styles from './selectedPlaylist.css';

const SelectedPlaylist = ({ name, numberOfFollowers, image }) => (
<header className={styles.header}>
    <OverlayImage imageUrl={image} altText={`Cover image for playlist '${name}'`} />
    <div className={styles.metaData}>
        <h1>{name}</h1>
        <span className={styles.numberOfFollowers}>
            Has <strong>{ numberOfFollowers }</strong> followers
        </span>
    </div>
    <ul className={styles.statsBlock}>
        <li className="url">
            <a href="https://api.spotify.com/v1/users/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju">
                https://api.spotify.com/v1/users/wizzlersmate/playlists/1AVZz0mBuGbCEoNRQdYQju
            </a>
        </li>
        <li className="numTracks"><strong>15</strong> tracks</li>
        <li className="visibility">Public</li>
    </ul>
</header>
);

SelectedPlaylist.propTypes = {
    name: PropTypes.string.isRequired,
    numberOfFollowers: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default SelectedPlaylist;
