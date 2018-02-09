import type { Action } from 'actions';
type PlaylistsState = {
    playlists: Array<Playlist>
}

const InitialState: PlaylistsState = {
    playlists: []
};

export function playlists(state: PlaylistsState = InitialState, action: Action): PlaylistsState {
    switch (action.type) {
        case 'PLAYLISTS_FETCHED':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}
