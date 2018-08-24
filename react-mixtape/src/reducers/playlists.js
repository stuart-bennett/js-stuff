import * as actions from '../actionTypes';

export const initialState = {
    playlist: null,
    playlists: [],
    tracks: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_PLAYLISTS_SUCCESS:
            return {
                ...state,
               playlists: action.playlists
            };
        case actions.FETCH_PLAYLIST_SUCCESS:
            return {
                ...state,
                playlist: action.playlist
            };
        case actions.FETCH_PLAYLIST_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.tracks
            };
        case actions.PLAYLIST_TRACKS_ADD:
            return {
                ...state,
                tracks: [...state.tracks, action.track]
            };
        case actions.PLAYLIST_TRACKS_SAVE_SUCCESS:
            return {
                ...state,
                tracks: state.tracks.map(t => ({ ...t, isPersisted: true }))
            };
        default:
            return state;
    }
}
