// @flow

import { getCurrentUser, getPlaylists } from 'http/spotifyApi';
import { oAuth, anonymous } from 'models/authentication';

export type UserAuthenticated = {
    type: 'USER_AUTHENTICATED',
    auth: Authentication
};

function userAuthenticated(auth: Authentication): UserAuthenticated {
    return {
        type: 'USER_AUTHENTICATED',
        auth
    };
}

export const userAuthenticatedAsync = (token: string) =>
    (dispatch: any) => getCurrentUser(token).then(userResult => {
        let auth: Authentication = userResult.hasValue
            ? oAuth(token, userResult.right)
            : anonymous();

        dispatch(userAuthenticated(auth));

        getPlaylists(token).then(r => {
            if (r.hasValue) {
                dispatch({
                    type: 'PLAYLISTS_FETCHED',
                    playlists: r.right
                });
            }
        });
    });
