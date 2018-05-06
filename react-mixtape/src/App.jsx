import React from 'react';
import { hot } from 'react-hot-loader';
import SelectedPlaylist from './components/SelectedPlaylist.jsx';
import PlaylistTracks from './components/PlaylistTracks.jsx';

const fakeTracks = [
    { id: '001', songTitle: 'Band on the run', artist: 'Wings'},
    { id: '002', songTitle: 'Living on a prayer', artist: 'Bon Jovi' }
];

const App = () => (
<div>
    <SelectedPlaylist
        name="test"
        numberOfFollowers={53}
    />
    <PlaylistTracks tracks={fakeTracks} />
</div>
);

export default hot(module)(App);
