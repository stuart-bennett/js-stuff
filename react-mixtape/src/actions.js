import {
    getCurrentUser,
    getPlaylists,
    getPlaylistTracks,
    search } from 'http/spotifyApi'
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

type SearchTermChanged = {
    type: 'SEARCH_TERM_CHANGED',
    searchTerm: string,
    searchResults: Array<SearchResult>
};

export type Action =
      UserAuthenticated
    | PlaylistSelected
    | SearchTermChanged

export const searchTermChangedAsync = (s: string, a: OAuth) =>
    (dispatch: any) => search(s, a.token).then(res => {
        if (!res.hasValue) {
            return;
        }

        dispatch({
            type: 'SEARCH_TERM_CHANGED',
            s,
            searchResults: res.right
        });
    });

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
