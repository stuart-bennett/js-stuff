import { addTrack } from './playlist';
import * as actions from '../actionTypes';

describe("playlist action creators", () => {
    test("test", () => {
        const track = {};
        expect(addTrack(track)).toEqual({
            type: actions.PLAYLIST_TRACKS_ADD,
            track
        });
    });
});
