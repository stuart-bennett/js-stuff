import React from 'react';
import PropTypes from 'prop-types';

const PlaylistTracks = ({ tracks }) => (
    <ol>
    { tracks.map((t, i) => <li key={`${t.id}_${i}`}>
        {t.songTitle} <br />
        <small>{t.artist}</small></li>)
    }
    </ol>
);

PlaylistTracks.propTypes = {
    tracks: PropTypes.array.isRequired
};

export default PlaylistTracks;
