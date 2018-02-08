import { getCurrentUser } from 'http/spotifyApi'
import { oAuth, anonymous } from 'models/authentication'

export const USER_AUTHENTICATED: string = "USER_AUTHENTICATED";
export const PLAYLIST_SELECTED: string = "PLAYLIST_SELECTED";

type UserAuthenticated = {
    type: 'USER_AUTHENTICATED',
    auth: Authentication
};

type PlaylistSelected = {
    type: 'PLAYLIST_SELECTED',
    playlist: Playlist
};

export type Action = UserAuthenticated | PlaylistSelected;

export const userAuthenticatedAsync = (token: string) =>

    (dispatch: any) => getCurrentUser(token).then(userResult => {
        let auth: Authentication = userResult.hasValue
            ? oAuth(token, userResult.right)
            : anonymous();

        dispatch({
            type: 'USER_AUTHENTICATED',
            auth
        });
    });

    // let user = getCurrentUser(token)
    //     .then((userResult: Either<string, User>) => {
    //         let auth: Authentication = { isAuthenticated: false };
    //         if (userResult.hasValue) {
    //             return {
    //                 type: 'USER_AUTHENTICATED',
    //                 auth: {
    //                     isAuthenticated: true,
    //                     user: userResult.right,
    //                     token,
    //                 }
    //             }
    //         }
    //     });

export const playlistSelected = (playlist: Playlist): PlaylistSelected => ({
    type: 'PLAYLIST_SELECTED',
    playlist
});
