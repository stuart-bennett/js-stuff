import * as actions from '../actionTypes';
import * as spotify from '../utils/spotifyApi';

const fetchPlaylistsSuccess = data => ({
    type: actions.FETCH_PLAYLISTS_SUCCESS,
    playlists: data
});

const fetchPlaylistsFail = err => ({
    type: actions.FETCH_PLAYLISTS_FAIL,
    reason: err
});

const mapResponse = response => ({
    id: response.id,
    name: response.name,
    image: response.images[0].url
});

export const fetchPlaylists = oAuthToken => dispatch =>
    spotify
        .get("/me/playlists", oAuthToken)
        .then(r => r.json())
        .then(r => {
            const playlists = r.items.map(mapResponse);
            dispatch(fetchPlaylistsSuccess(playlists));
        })
        .catch(err => dispatch(fetchPlaylistsFail(err)));
