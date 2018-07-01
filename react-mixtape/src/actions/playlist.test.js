import { addTrack } from './playlist';
import * as actions from '../actionTypes';

describe("playlist action creators", () => {
    describe("calling addTrack", () => {
        test("creates the action: PLAYLIST_TRACKS_ADD", () => {
            const track = {};
            expect(addTrack(track)).toEqual({
                type: actions.PLAYLIST_TRACKS_ADD,
                track
            });
        });
    });
});
