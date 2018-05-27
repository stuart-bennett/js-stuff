import React from 'react';
import PropTypes from 'prop-types';
import styles from './playlistTracks.css';

const PlaylistTracks = ({ tracks }) => (
    <div className={styles.container}>
        <h1>Tracklisting</h1>
        <ol>
        { tracks.map((t, i) => <li key={`${t.id}_${i}`}>
                <div>
                    {t.songTitle} <br />
                    <small>{t.artist}</small>
                </div>
            </li>)
        }
        </ol>
    </div>
);

PlaylistTracks.propTypes = {
    tracks: PropTypes.array.isRequired
};

export default PlaylistTracks;
