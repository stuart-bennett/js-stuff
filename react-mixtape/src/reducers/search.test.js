import { action } from '../utils/testHelpers';
import {
    SEARCH_FETCHING,
    SEARCH_FAIL,
    SEARCH_SUCCESS,
    SEARCH_CLEAR } from '../actionTypes';
import reducer from './search';
import * as remoteData from '../utils/remoteData';

const initialState = {
    results: remoteData.initial
};

const data = [1,2,3,4];
const succeedState = {
    results: remoteData.success(data)
};

describe('search reducer', () => {
    describe('the initial action', () => {
        const result = reducer(undefined, {});
        test(
            'should be in initial state',
            () => expect(result).toEqual(initialState));
    });

    describe('when handling SEARCH_FETCHING action', () => {
        const result = reducer(initialState, action(SEARCH_FETCHING));
        test(
            'should move search results to fetching state',
            () => expect(result.results).toEqual(remoteData.fetching));
    });

    describe('when handling SEARCH_FAIL', () => {
        const result = reducer(initialState, action(
            SEARCH_FAIL,
            { searchResults: remoteData.fail('Something went wrong') }));

        test(
            'searchResults should be in failed state',
            () => expect(remoteData.isFail(result.results)).toBe(true));
    });

    describe('when handling SEARCH_SUCCESS', () => {
        const searchResults = [1,2,3];
        const state = reducer(initialState, action(
            SEARCH_SUCCESS,
            { searchResults: remoteData.success(searchResults) }));

        test(
            'results should be have data',
            () => expect(remoteData.hasData(state.results)).toBeTruthy());

        test(
            'results should be the data it succeeded with',
            () => expect(remoteData.hasData(state.results)).toBe(searchResults));
    });

    describe('when handling SEARCH_CLEAR', () => {
        const result = reducer(succeedState, action(SEARCH_CLEAR));
        test(
            'searchResults should become intitial state',
            () => expect(result).toEqual(initialState));
    });
});
