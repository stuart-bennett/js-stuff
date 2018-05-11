import { fetchCurrentUser } from './user';
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

export const tryReceiveToken = fragment => dispatch => {
    const token = extractToken(fragment);
    if (!token) {
        dispatch(tokenNotPresent);
        return;
    }

    dispatch(loginSuccess(token));
    dispatch(fetchCurrentUser(token));
};
