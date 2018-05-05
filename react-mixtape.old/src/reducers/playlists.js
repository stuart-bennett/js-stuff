import type { Action } from 'actions';
import type { Playlist } from 'models/playlist.types';

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
        case 'ADD_TRACK_TO_CURRENT_PLAYLIST':
            if (state.selectedPlaylist == null) {
                // TODO: show a message or something if no playlist selected
                return { ...state };
            }

            return {
                ...state,
                selectedPlaylist: {
                    ...state.selectedPlaylist,
                    tracks: [...state.selectedPlaylist.tracks, action.track]
                }
            }
        default:
            return state;
    }
}
