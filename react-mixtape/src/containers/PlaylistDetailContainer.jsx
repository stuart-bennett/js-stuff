/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/playlist';
import PlaylistDetail from '../components/PlaylistDetail.jsx';
import store from '../store';

class PlaylistDetailContainer extends React.Component {
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

        return <PlaylistDetail
            playlist={{
                ...this.state.playlist,
                canSave: this.state.canSavePlaylist
            }}
            searchResults={this.state.searchResults}
            tracks={this.state.tracks}
        />;
    }
}

PlaylistDetailContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            playlistId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default PlaylistDetailContainer;
