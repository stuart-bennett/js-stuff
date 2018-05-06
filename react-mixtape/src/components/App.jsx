import React from 'react';
import { hot } from 'react-hot-loader';
import SelectedPlaylist from './SelectedPlaylist.jsx';
import SearchResults from './SearchResults.jsx';
import PlaylistTracks from './PlaylistTracks.jsx';

const fakeTracks = [
    { id: '001', songTitle: 'Band on the run', artist: 'Wings'},
    { id: '002', songTitle: 'Living on a prayer', artist: 'Bon Jovi' }
];

const fakeSearchResults = [
    { id: '321', songTitle: 'Kelly watch the stars', artist: 'Air' },
    { id: '492', songTitle: 'Self Esteem', artist: 'The Offspring' }
];

const App = () => (
<div>
    <SelectedPlaylist
        name="test"
        numberOfFollowers={53}
    />
    <SearchResults results={fakeSearchResults} />
    <PlaylistTracks tracks={fakeTracks} />
</div>
);

export default hot(module)(App);
