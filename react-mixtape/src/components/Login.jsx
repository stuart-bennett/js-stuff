import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row } from 'react-grid-system';

const Login = ({ login }) => (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row debug>
            <p>You are about to be redirected to Spotify to log into your account.</p>
        </Row>
        <Row>
            <button onClick={login}>Login</button>
        </Row>
    </Container>
);

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default Login;
