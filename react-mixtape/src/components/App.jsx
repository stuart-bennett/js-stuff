import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.jsx';
import PlaylistSelectorContainer from '../containers/PlaylistSelectorContainer.jsx';
import PlaylistContainer from '../containers/PlaylistContainer.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const App = () => (
<div>
    <Route path="/" component={LoginContainer} />
    <PrivateRoute path="/" component={PlaylistSelectorContainer} />
    <PrivateRoute path="/:playlistId" component={PlaylistContainer} />
</div>
);

export default hot(module)(App);
