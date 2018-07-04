import PropTypes from 'prop-types';
import React from 'react';
import SelectedPlaylist from './SelectedPlaylist.jsx';
import PlaylistTracks from './PlaylistTracks.jsx';
import styles from './playlistDetail.css';

const PlaylistDetail = ({ playlist, tracks }) => (
    <div className={styles.container}>
        <SelectedPlaylist {...playlist} />
        <PlaylistTracks tracks={tracks} />
    </div>
);

PlaylistDetail.propTypes = {
    playlist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        numberOfFollowers: PropTypes.number.isRequired,
        canSave: PropTypes.bool.isRequired
    }).isRequired,
    tracks: PropTypes.array.isRequired
};

export default PlaylistDetail;
