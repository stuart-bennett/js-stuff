// @flow

export type AddTrackToCurrentPlaylist = {
    type: 'ADD_TRACK_TO_CURRENT_PLAYLIST',
    track: PlaylistTrack
};

export const addTrackToCurrentPlaylist = (track: PlaylistTrack) => ({
    type: 'ADD_TRACK_TO_CURRENT_PLAYLIST',
    track
});

