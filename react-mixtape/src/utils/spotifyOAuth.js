import * as queryString from './url';

const baseUrl = 'https://accounts.spotify.com/authorize';
const oAuthSettings = {
    client_id: '1f662e1ad1ae494382cd56133ebb7b14',
    redirect_uri: 'http://localhost:8080',
    scope: 'playlist-modify-public',
    response_type: 'token'
};

export const url =
    `${baseUrl}?${queryString.make(oAuthSettings)}`;
