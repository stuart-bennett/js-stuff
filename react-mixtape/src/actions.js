import {
    getCurrentUser,
    getPlaylists,
    getPlaylistTracks } from 'http/spotifyApi'
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

        getPlaylists(token).then(r => {
            if (r.hasValue) {
                dispatch({
                    type: 'PLAYLISTS_FETCHED',
                    playlists: r.right
                });
            }
        });

    });

export const playlistSelectedAsync = (a: OAuth, playlist: Playlist) =>
    (dispatch: any) => {
        return getPlaylistTracks(a.user.id, playlist.id, a.token).then(r => {
            if (r.hasValue) {
                playlist.tracks = r.right;
                dispatch({
                    type: 'PLAYLIST_SELECTED',
                    playlist
                });
            }
        });
    }
