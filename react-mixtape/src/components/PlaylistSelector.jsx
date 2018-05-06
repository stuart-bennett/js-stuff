import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaylistSelector = ({ playlists }) => (
    <ul>
    { playlists.map(pl => <li key={pl.id}>
        <Link to={pl.id}>{pl.name}</Link></li>) }
    </ul>
);

PlaylistSelector.propTypes = {
    playlists: PropTypes.array.isRequired
};

export default PlaylistSelector;
