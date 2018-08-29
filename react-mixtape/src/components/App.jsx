import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.jsx';
import MenuContainer from '../containers/MenuContainer.jsx';
import PlaylistSelectorContainer from '../containers/PlaylistSelectorContainer.jsx';
import PlaylistDetailContainer from '../containers/PlaylistDetailContainer.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';
import SearchResultsContainer from '../containers/SearchResultsContainer.jsx';
import ToastContainer from '../containers/ToastContainer.jsx';
import * as actions from '../actions/feedback';
import store from '../store';

const App = () => (
<Container fluid>
    <ToastContainer />
    <Route path="/" component={LoginContainer} />
    <Row>
        <Col md={3}>
            <PrivateRoute path="/" component={MenuContainer} />
        </Col>
        <Col md={9}>
            <PrivateRoute path="/:playlistId" component={SearchContainer} />
        </Col>
    </Row>
    <Row>
        <Col md={3}>
            <PrivateRoute path="/" component={PlaylistSelectorContainer} />
        </Col>
        <Col md={4}>
            <PrivateRoute path="/:playlistId" component={PlaylistDetailContainer} />
        </Col>
        <Col md={5}>
            <PrivateRoute path="/:playlistId" component={SearchResultsContainer} />
        </Col>
    </Row>
    <button onClick={() => store.dispatch(actions.raiseNotification("This is a test message")) }>Click here</button>
</Container>
);

export default hot(module)(App);
