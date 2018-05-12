/* eslint-disable no-console */
import * as actions from '../actionTypes';
import * as spotify from '../utils/spotifyApi';

const searchSuccess = results => ({
    type: actions.SEARCH_SUCCESS,
    searchResults: results
});

const searchFail = err => ({
    type: actions.SEARCH_FAIL,
    reason: err
});

export const search = (searchTerm, oAuthToken) => dispatch =>
    spotify
        .get(`/search?q=${searchTerm}&type=track`, oAuthToken)
        .then(r => r.json())
        .then(r => {
            const tracks = r.tracks.items.map(t => ({
                id: t.id,
                songTitle: t.name,
                artists: t.artists,
                image: t.album && t.album.images.length >= 2 ? t.album.images[1].url : null
            }));

            dispatch(searchSuccess(tracks));
        })
        .catch(err => dispatch(searchFail(err)));
