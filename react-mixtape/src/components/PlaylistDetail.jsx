import PropTypes from 'prop-types';
import React from 'react';
import SearchContainer from '../containers/SearchContainer.jsx';
import SearchResults from './SearchResults.jsx';
import SelectedPlaylist from './SelectedPlaylist.jsx';
import PlaylistTracks from './PlaylistTracks.jsx';

const PlaylistDetail = ({ playlist, searchResults, tracks }) =>
    <div>
        <SelectedPlaylist {...playlist} />
        <SearchContainer />
        <SearchResults results={searchResults} />
        <PlaylistTracks tracks={tracks} />
    </div>;

PlaylistDetail.propTypes = {
    playlist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        numberOfFollowers: PropTypes.number.isRequired
    }).isRequired,
    searchResults: PropTypes.array.isRequired,
    tracks: PropTypes.array.isRequired
};

export default PlaylistDetail;
