import {
    FETCH_PLAYLISTS_SUCCESS,
    FETCH_PLAYLIST_SUCCESS,
    FETCH_PLAYLIST_TRACKS_SUCCESS } from '../actionTypes';
import { default as reducer, initialState } from './playlists';
import { action } from '../utils/testHelpers';

describe('playlists reducer', () => {
    describe('when handling initial action', () => {
        const result = reducer(undefined, {});
        test(
            'should be in initial state',
            () => expect(result).toEqual(initialState));
    });

    describe('when handling FETCH_PLAYLISTS_SUCCESS', () => {
        const playlists = [1,2,3];
        const result = reducer(initialState, action(FETCH_PLAYLISTS_SUCCESS, { playlists }));
        test(
            'playlists should be the array provided in the action',
            () => expect(result).toEqual({ ...initialState, playlists }));
    });

    describe('when handling FETCH_PLAYLIST_SUCCEED', () => {
        const playlist = { name: 'test.name' };
        const result = reducer(initialState, action(FETCH_PLAYLIST_SUCCESS, { playlist }));
        test(
            'playlist should be the object provided in the action',
            () => expect(result).toEqual({ ...initialState, playlist }));
    });

    describe('when handling FETCH_PLAYLIST_TRACKS_SUCCESS', () => {
        const tracks = [4,5,6];
        const result = reducer(initialState, action(FETCH_PLAYLIST_TRACKS_SUCCESS, { tracks }));
        test(
            'playlist tracks should be the data provided in the action',
            () => expect(result).toEqual({ ...initialState, tracks }));
    });
});
