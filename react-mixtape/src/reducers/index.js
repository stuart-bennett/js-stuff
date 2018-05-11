import * as actions from '../actionTypes';

const initialState = {
    playlist: null,
    tracks: [],
    searchResults: [],
    playlists: [],
    token: null,
    userId: null,
    isAuthenticated: false,
    shouldRedirect: false };

export function reducer(state = initialState, action) {

    switch (action.type) {
        case actions.LOGIN_REDIRECT:
            return {
                ...state,
                shouldRedirect: true
            };
        case actions.LOGIN_NO_TOKEN:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                userId: null,
                shouldRedirect: false
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                shouldRedirect: false
            };
        case actions.FETCH_PLAYLISTS_SUCCESS:
            return {
                ...state,
               playlists: action.playlists
            };
        case actions.FETCH_PLAYLIST_SUCCESS:
            return {
                ...state,
                playlist: action.playlist
            }
        case actions.SEARCH_SUCCESS:
            return {
                ...state,
                searchResults: action.searchResults
            }
        case actions.FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                userId: action.userId
            }
        case actions.FETCH_PLAYLIST_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.tracks
            }
        default:
            return state;
    }
}
