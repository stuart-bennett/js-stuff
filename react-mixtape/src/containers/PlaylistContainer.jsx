/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from './SearchContainer.jsx';
import SearchResults from '../components/SearchResults.jsx';
import SelectedPlaylist from '../components/SelectedPlaylist.jsx';
import PlaylistTracks from '../components/PlaylistTracks.jsx';
import store from '../store';
import * as actions from '../actions/playlist';

class PlaylistContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    componentDidUpdate(prevProps) {
        const { playlistId } = this.props.match.params;
        if (prevProps.match.params.playlistId === playlistId) {
            return;
        }

        store.dispatch(actions.fetchPlaylist(
            this.state.userId,
            playlistId,
            this.state.token));

        store.dispatch(actions.fetchPlaylistTracks(
            this.state.userId,
            playlistId,
            this.state.token));
    }

    componentDidMount() {
        const { playlistId } = this.props.match.params;
        store.dispatch(actions.fetchPlaylist(
            this.state.userId,
            playlistId,
            this.state.token));

        store.dispatch(actions.fetchPlaylistTracks(
            this.state.userId,
            playlistId,
            this.state.token));
    }

    // not sure if this is rendering too many components
    // maybe this will render a <playlist> component instead
    // since this is just a container
    render() {
        if (!this.state.playlist) {
            return null;
        }

        return (
            <div>
                <SelectedPlaylist {...this.state.playlist } />
                <SearchContainer />
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
