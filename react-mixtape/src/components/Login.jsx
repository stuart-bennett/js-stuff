import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ login }) => (
    <div>
        <p>You are about to be redirected to Spotify to log into your account.</p>
        <button onClick={login}>Login</button>
    </div>
);

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default Login;
