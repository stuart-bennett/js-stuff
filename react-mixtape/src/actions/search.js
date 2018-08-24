/* eslint-disable no-console, no-unreachable */
import * as actions from '../actionTypes';
import * as spotify from '../utils/spotifyApi';
import { success, fail } from '../utils/remoteData';

const searchSuccess = results => ({
    type: actions.SEARCH_SUCCESS,
    searchResults: success(results)
});

const searchFail = err => ({
    type: actions.SEARCH_FAIL,
    searchResults: fail(err)
});

export const clearSearch = () => ({
    type: actions.SEARCH_CLEAR
});

export const searchFetching = () => ({
    type: actions.SEARCH_FETCHING
});

export const search = (searchTerm, oAuthToken) => dispatch => {
    dispatch(searchFetching());
    return spotify
        .get(`/search?q=${searchTerm}&type=track&limit=6`, oAuthToken)
        .then(r => r.json())
        .then(r => {
            const tracks = r.tracks.items.map(t => ({
                id: t.id,
                songTitle: t.name,
                uri: t.uri,
                artists: t.artists,
                image: t.album && t.album.images.length >= 2 ? t.album.images[1].url : null
            }));

            dispatch(searchSuccess(tracks));
        })
        .catch(err => dispatch(searchFail(err)));
};
