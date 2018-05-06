/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
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

PlaylistContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            playlistId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default PlaylistContainer;

