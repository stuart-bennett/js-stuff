import { addTrack } from './playlist';
import * as actions from '../actionTypes';

describe("playlist action creators", () => {
    describe("calling addTrack", () => {
        const track = {};
        const result = addTrack(track);
        test("creates the action: PLAYLIST_TRACKS_ADD", () =>
            expect(result.type).toEqual(actions.PLAYLIST_TRACKS_ADD))

        test("marks the track as not persisted", () =>
            expect(result.track).toEqual({ ...track, isPersisted: false }))
    });
});
