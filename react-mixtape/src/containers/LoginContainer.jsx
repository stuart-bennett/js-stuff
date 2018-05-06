/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ExternalRedirect from '../components/ExternalRedirect.jsx';
import Login from '../components/Login.jsx';
import { url, tryReceiveToken } from '../utils/spotifyOAuth';
import { isAuthenticated } from '../utils/auth';

class LoginContainer extends React.Component {

    componentWillMount() {
        tryReceiveToken(this.props.location.hash);
        this.setState({
            shouldRedirect: false,
            isAuthenticated: isAuthenticated()
        });
    }

    handleLogin() {
        this.setState({
            shouldRedirect: true
        });
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
