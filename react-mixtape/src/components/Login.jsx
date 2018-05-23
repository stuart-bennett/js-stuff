import PropTypes from 'prop-types';
import React from 'react';
import styles from './login.css';

const Login = ({ login }) => (
<div className={styles.container}>
    <h1>React Mixtape</h1>
    <h2>What is it?</h2>
    <p>It&apos;s a prototype app I built with React JS which lets you create &amp; edit Spotify playlists.</p>
    <p>When you press the &quot;login&quot; button you will be redirected to <a href="https://www.spotify.com" className={styles.spotifyLink}>Spotify</a> to log into your account.</p>
    <p>The source code is available at: <a href="https://github.com/stuart-bennett/js-stuff/react-mixtape">GitHub</a>.</p>
    <button onClick={login}>Login</button>
    <p><small>This site never see&apos;s or store&apos; your Spotify login details.</small></p>
</div>
);

Login.propTypes = {
    login: PropTypes.func.isRequired
};

export default Login;
