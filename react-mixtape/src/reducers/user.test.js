import { FETCH_CURRENT_USER_SUCCESS } from '../actionTypes';
import { default as reducer, initialState } from './user';
import { action } from '../utils/testHelpers';

describe('user reducer', () => {
    describe('when handling initial action', () => {
        const result = reducer(undefined, {});
        test(
            'should be in initial state',
            () => expect(result).toBe(initialState));
    });

    describe('when handling FETCH_CURRENT_USER_SUCCESS', () => {
        const userId = 'test.userId';
        const profileImage = 'test.png';
        const profileUrl = 'http://test.local';
        const numberOfFollowers = 101;
        const result = reducer(
            initialState,
            action(
                FETCH_CURRENT_USER_SUCCESS,
                { userId, profileImage, profileUrl, numberOfFollowers }));

        test(
            'userId should be the value provided to the action',
            () => expect(result)
                .toEqual({ ...initialState, userId, profileImage, profileUrl, numberOfFollowers }));
    });
});
