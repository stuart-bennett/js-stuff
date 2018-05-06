import React from 'react';
import Login from '../components/Login.jsx';
import * as auth from '../utils/fakeAuth';

class LoginContainer extends React.Component {

    componentWillMount() {
        this.setState({
            isAuthenticated: false
        });
    }

    shouldComponentUpdate() {
        return auth.isAuthenticated() !== this.state.isAuthenticated;
    }

    handleLogin() {
        auth.login();
        this.setState({
            isAuthenticated: auth.isAuthenticated
        });
    }

    render() {
        return this.state.isAuthenticated
            ? null
            : <Login login={() => this.handleLogin()} />
    }
}

export default LoginContainer;
