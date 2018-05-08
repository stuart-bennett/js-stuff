/* eslint-disable no-console */
import React from 'react';
import PlaylistSelector from '../components/PlaylistSelector.jsx';
import * as spotify from '../utils/spotifyApi';
import { getLoggedInUser } from '../utils/auth';

class PlaylistSelectorContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        spotify
            .get("/me/playlists", getLoggedInUser().token)
            .then(r => r.json())
            .then(r => r.items.map(i => ({ id: i.id, name: i.name })))
            .then(m => this.setState({
                playlists: m
            }));
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

