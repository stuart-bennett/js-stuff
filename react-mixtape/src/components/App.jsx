/* eslint-disable no-console */
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import PlaylistsContainer from '../containers/PlaylistsContainer.jsx';
import PlaylistContainer from '../containers/PlaylistContainer.jsx';

const App = () => (
<div>
    <PlaylistsContainer />
    <Route path="/:playlistId" component={PlaylistContainer} />
</div>
);

export default hot(module)(App);
