import React from 'react';
import { hot } from 'react-hot-loader';
import LoginContainer from '../containers/LoginContainer.jsx';
import PlaylistsContainer from '../containers/PlaylistsContainer.jsx';
import PlaylistContainer from '../containers/PlaylistContainer.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const App = () => (
<div>
    <LoginContainer />
    <PrivateRoute path="/" component={PlaylistsContainer} />
    <PrivateRoute path="/:playlistId" component={PlaylistContainer} />
</div>
);

export default hot(module)(App);
