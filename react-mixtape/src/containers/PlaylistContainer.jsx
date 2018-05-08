/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../components/SearchResults.jsx';
import SelectedPlaylist from '../components/SelectedPlaylist.jsx';
import PlaylistTracks from '../components/PlaylistTracks.jsx';
import * as spotify from '../utils/spotifyApi';
import { getLoggedInUser } from '../utils/auth';

const fakeTracks = [
    { id: '001', songTitle: 'Band on the run', artist: 'Wings'},
    { id: '002', songTitle: 'Living on a prayer', artist: 'Bon Jovi' }
];

const fakeSearchResults = [
    { id: '321', songTitle: 'Kelly watch the stars', artist: 'Air' },
    { id: '492', songTitle: 'Self Esteem', artist: 'The Offspring' }
];

class PlaylistContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            name: "test",
            numberOfFollowers: 103,
            searchResults: fakeSearchResults,
            tracks: fakeTracks
        });
    }

    fetchAndUpdate(playlistId) {
        spotify
            .get(`/playlists/${playlistId}`, getLoggedInUser().token)
            .then(r => r.json())
            .then(r => this.setState({
                name: r.name,
                numberOfFollowers: r.followers.total,
            }));
    }

    componentDidUpdate(prevProps) {
        const { playlistId } = this.props.match.params;
        if (prevProps.match.params.playlistId === playlistId) {
            return;
        }

        // 1. fetch playlist
        this.fetchAndUpdate(playlistId);

        // 2. fetch playlist tracks
    }

    componentDidMount() {
        const { playlistId } = this.props.match.params;

        // 1. fetch playlist
        this.fetchAndUpdate(playlistId);
    }

    // not sure if this is rendering too many components
    // maybe this will render a <playlist> component instead
    // since this is just a container
    render() {
        return (
            <div>
                <SelectedPlaylist
                    name={this.state.name}
                    numberOfFollowers={this.state.numberOfFollowers}
                />
                <SearchResults results={this.state.searchResults} />
                <PlaylistTracks tracks={this.state.tracks} />
            </div>
        );
    }
}

PlaylistContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            playlistId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default PlaylistContainer;
