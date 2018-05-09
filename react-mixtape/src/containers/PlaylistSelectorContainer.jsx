/* eslint-disable no-console */
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { fetchPlaylists } from '../actions/playlistSelector';
import PlaylistSelector from '../components/PlaylistSelector.jsx';
import { getLoggedInUser } from '../utils/auth';
import { reducer } from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

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

