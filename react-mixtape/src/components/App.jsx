import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.jsx';
import Menu from './Menu.jsx';
import PlaylistSelectorContainer from '../containers/PlaylistSelectorContainer.jsx';
import PlaylistDetailContainer from '../containers/PlaylistDetailContainer.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const App = () => (
<Container fluid>
    <Route path="/" component={LoginContainer} />
    <Row>
        <Col md={3}>
            <PrivateRoute path="/" component={Menu} />
        </Col>
        <Col md={3}>
            <PrivateRoute path="/" component={PlaylistSelectorContainer} />
        </Col>
        <Col md={3}>
            <PrivateRoute path="/:playlistId" component={PlaylistDetailContainer} />
        </Col>
    </Row>
</Container>
);

App.propTypes = {
    isShowingMenu: PropTypes.bool.isRequired
}

export default hot(module)(App);
