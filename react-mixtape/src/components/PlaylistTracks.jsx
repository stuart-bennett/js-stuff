import React from 'react';
import PropTypes from 'prop-types';

const PlaylistTracks = ({ tracks }) => (
    <ol>
    { tracks.map(t => <li key={t.id}>
        {t.songTitle} <br />
        <small>{t.artist}</small></li>)
    }
    </ol>
);

PlaylistTracks.propTypes = {
    tracks: PropTypes.array.isRequired
};

export default PlaylistTracks;
