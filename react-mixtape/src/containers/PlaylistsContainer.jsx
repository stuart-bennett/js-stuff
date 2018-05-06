/* eslint-disable no-console */
import React from 'react';
import PlaylistSelector from '../components/PlaylistSelector.jsx';

const fakePlaylists = [
    { id: "2001", name: "Roadtrip" },
    { id: "2002", name: "In the garden" }
];

class PlaylistContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // 1. fetch playlists for the current user
        this.setState({
            playlists: fakePlaylists
        });
    }

    render() {
        return <PlaylistSelector playlists={this.state.playlists} />;
    }
}

export default PlaylistContainer;

