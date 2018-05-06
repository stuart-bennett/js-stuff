import * as queryString from './url';
import { login } from './auth';

const baseUrl = 'https://accounts.spotify.com/authorize';
const oAuthSettings = {
    client_id: '1f662e1ad1ae494382cd56133ebb7b14',
    redirect_uri: 'http://localhost:8080',
    scope: 'playlist-modify-public',
    response_type: 'token'
};

const extractToken = (fragment) => fragment.split('=')[1];

export const tryReceiveToken = (fragment) => {
    const token = extractToken(fragment);
    if (!token) {
        // token wasn't present
        // we don't want to log someone out if they're already logged in
        return;
    }

    login(token);
};

export const url =
    `${baseUrl}?${queryString.make(oAuthSettings)}`;
