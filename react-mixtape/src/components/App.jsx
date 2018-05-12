import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.jsx';
import MenuContainer from '../containers/MenuContainer.jsx';
import PlaylistSelectorContainer from '../containers/PlaylistSelectorContainer.jsx';
import PlaylistDetailContainer from '../containers/PlaylistDetailContainer.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const App = ({ isShowingMenu }) => (
<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Route path="/" component={LoginContainer} />
    <Row nogutter>
        <Col
            debug
            md={ isShowingMenu ? 1 : 0 }
            style={{ display: isShowingMenu ? 'block' : 'none' }}>
            <PrivateRoute path="/" component={PlaylistSelectorContainer} />
        </Col>
        <Col md={ isShowingMenu ? 11 : 12}>
            <PrivateRoute path="/" component={MenuContainer} />
            <PrivateRoute path="/:playlistId" component={PlaylistDetailContainer} />
        </Col>
    </Row>
</Container>
);

App.propTypes = {
    isShowingMenu: PropTypes.bool.isRequired
}

export default hot(module)(App);
