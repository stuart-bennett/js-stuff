import * as actions from '../actionTypes';

const extractToken = (fragment) => fragment.split('=')[1];
const tokenNotPresent = () => ({
    type: actions.LOGIN_NO_TOKEN
});

const loginSuccess = token => ({
    type: actions.LOGIN_SUCCESS,
    token: token
});

export const redirectToSpotifyLogin = () => ({
    type: actions.LOGIN_REDIRECT
});

export const tryReceiveToken = (fragment) => {
    const token = extractToken(fragment);
    return token
        ? loginSuccess(token)
        : tokenNotPresent();
};
