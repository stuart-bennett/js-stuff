/* eslint-disable no-console */
import React from 'react';
import { fetchPlaylists } from '../actions/playlistSelector';
import PlaylistSelector from '../components/PlaylistSelector.jsx';
import store from '../store';
import { getLoggedInUser } from '../utils/auth';

class PlaylistSelectorContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.subscribe(() => this.setState(store.getState()));
        store.dispatch(fetchPlaylists(getLoggedInUser().token));
    }

    componentWillMount() {
        this.setState({
            playlists: []
        });
    }

    render() {
        return <PlaylistSelector playlists={this.state.playlists} />;
    }
}

export default PlaylistSelectorContainer;

