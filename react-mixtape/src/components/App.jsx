import React from 'react';
import { Container } from 'react-grid-system';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.jsx';
import PlaylistSelectorContainer from '../containers/PlaylistSelectorContainer.jsx';
import PlaylistDetailContainer from '../containers/PlaylistDetailContainer.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const App = () => (
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Route path="/" component={LoginContainer} />
    <PrivateRoute path="/:playlistId" component={PlaylistDetailContainer} />
    <PrivateRoute path="/" component={PlaylistSelectorContainer} />
</Container>
);

export default hot(module)(App);
