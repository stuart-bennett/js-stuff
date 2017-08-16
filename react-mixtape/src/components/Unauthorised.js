// @flow

import React from 'react';

type Props = {
    clientId: string
};

const spotifyAuthBaseUrl = "https://accounts.spotify.com/authorize/";
const redirectUri = "http://localhost:8080/index.html";

const makeOAuthUrl = (p: Props): string =>
    `${spotifyAuthBaseUrl}?client_id=${p.clientId}&response_type=token&redirect_uri=${redirectUri}`;

const Unauthorised = (p: Props) => <div>
        <a href={makeOAuthUrl(p)}>Authorise</a>
    </div>

export default Unauthorised;

