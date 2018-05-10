import React from 'react';
import { fetchPlaylists } from '../actions/playlistSelector';
import PlaylistSelector from '../components/PlaylistSelector.jsx';
import store from '../store';

class PlaylistSelectorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    componentDidMount() {
        store.dispatch(fetchPlaylists(store.getState().token));
    }

    render() {
        return <PlaylistSelector playlists={this.state.playlists} />
    }
}

export default PlaylistSelectorContainer;

