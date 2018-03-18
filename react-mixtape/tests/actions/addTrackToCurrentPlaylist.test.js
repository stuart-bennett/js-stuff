// @flow
import type { PlaylistTrack } from 'models/playlist.types';
import { addTrackToCurrentPlaylist } from 'actions/addTrackToCurrentPlaylist';

describe("The 'addTrackToCurrentPlaylist' action", () => {
    test("should create an action to add a track", () => {
        let track: PlaylistTrack = {
            id: 'test.id',
            title: 'test.title',
            primaryArtist: 'test.primaryArtist',
            isNew: true,
            images: []
        }

        let expectedAction = {
            type:  'ADD_TRACK_TO_CURRENT_PLAYLIST',
            track
        };

        expect(addTrackToCurrentPlaylist(track)).toEqual(expectedAction);
    });
});
