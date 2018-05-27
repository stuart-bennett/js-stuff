import PropTypes from 'prop-types';
import React from 'react';
import SearchContainer from '../containers/SearchContainer.jsx';
import SearchResults from './SearchResults.jsx';
import SelectedPlaylist from './SelectedPlaylist.jsx';
import PlaylistTracks from './PlaylistTracks.jsx';
import RemoteData from './RemoteData.jsx';
import Spinner from './Spinner.jsx';
import styles from './playlistDetail.css';

const PlaylistDetail = ({ playlist, searchResults, tracks }) => (
    <div className={styles.container}>
        <SelectedPlaylist {...playlist} />
        <PlaylistTracks tracks={tracks} />
        <SearchContainer />
        <RemoteData
            data={searchResults}
            success={data => <SearchResults results={data} />}
            fetching={<Spinner />}
            fail={msg => <div>{msg}</div>} />
    </div>
);

PlaylistDetail.propTypes = {
    playlist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        numberOfFollowers: PropTypes.number.isRequired
    }).isRequired,
    searchResults: PropTypes.shape({
        state: PropTypes.number.isRequired
    }).isRequired,
    tracks: PropTypes.array.isRequired
};

export default PlaylistDetail;
