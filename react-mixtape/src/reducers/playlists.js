import type { Action } from 'actions';
type PlaylistsState = {
    playlists: Array<Playlist>,
    selectedPlaylist: ?Playlist
}

const InitialState: PlaylistsState = {
    playlists: [],
    selectedPlaylist: null
};

export function playlists(state: PlaylistsState = InitialState, action: Action): PlaylistsState {
    switch (action.type) {
        case 'PLAYLISTS_FETCHED':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'PLAYLIST_SELECTED':
            return {
                ...state,
                selectedPlaylist: action.playlist
            }
        default:
            return state;
    }
}
