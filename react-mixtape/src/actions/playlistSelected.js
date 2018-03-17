// @flow

import { getPlaylistTracks } from 'http/spotifyApi'

export type PlaylistSelected = {
    type: 'PLAYLIST_SELECTED',
    playlist: Playlist
};

function playlistSelected(playlist: Playlist): PlaylistSelected {
    return {
        type: 'PLAYLIST_SELECTED',
        playlist
    };
}

export const playlistSelectedAsync = (a: OAuth, playlist: Playlist) =>
    (dispatch: any) =>
        getPlaylistTracks(a.user.id, playlist.id, a.token).then(r => {
            if (!r.hasValue) {
                return;
            }

            playlist.tracks = r.right;
            dispatch(playlistSelected(playlist));
        });
