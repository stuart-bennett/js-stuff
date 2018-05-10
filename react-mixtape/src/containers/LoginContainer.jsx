/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/login';
import ExternalRedirect from '../components/ExternalRedirect.jsx';
import Login from '../components/Login.jsx';
import { url } from '../utils/spotifyOAuth';
import store from '../store';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    componentDidMount() {
        store.dispatch(actions.tryReceiveToken(this.props.location.hash));
    }

    handleLogin() {
        store.dispatch(actions.redirectToSpotifyLogin());
    }

    render() {
        if (this.state.shouldRedirect) {
            return <ExternalRedirect to={url} />;
        }

        if (!this.state.isAuthenticated) {
            return <Login login={() => this.handleLogin()} />
        }

        // <Redirect /> removes the #fragment which looks
        // better since there isn't  a massive token on url
        return this.props.location.hash.length > 0
            ? <Redirect to="/" />
            : null;
    }
}

LoginContainer.propTypes = {
    location: PropTypes.shape({
        hash: PropTypes.string.isRequired
    }).isRequired
};


export default LoginContainer;
