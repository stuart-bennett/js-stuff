import * as actions from '../actionTypes';

export const initialState = {
    selected: null,
    list: [],
    tracks: [],
    canSave: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_PLAYLISTS_SUCCESS:
            return {
                ...state,
               list: action.playlists
            };
        case actions.FETCH_PLAYLIST_SUCCESS:
            return {
                ...state,
                selected: action.playlist,
                canSave: false
            }
        case actions.FETCH_PLAYLIST_TRACKS_SUCCESS:
            return {
                ...state,
                tracks: action.tracks
            }
        case actions.PLAYLIST_TRACKS_ADD:
            return {
                ...state,
                tracks: [...state.tracks, action.track],
                canSave: true
            };
        case actions.PLAYLIST_TRACKS_SAVE_SUCCESS:
            return {
                ...state,
                tracks: state.tracks.map(t => ({ ...t, isPersisted: true })),
                canSave: false
            };
        default:
            return state;
    }
}
