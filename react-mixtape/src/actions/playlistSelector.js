import * as actions from '../actionTypes/playlistSelector';
import * as spotify from '../utils/spotifyApi';

const fetchPlaylistsSuccess = (data) => ({
    type: actions.FETCH_PLAYLISTS_SUCCESS,
    playlists: data
});

const fetchPlaylistsFail = (err) => ({
    type: actions.FETCH_PLAYLISTS_FAIL,
    reason: err
});

export const fetchPlaylists = oAuthToken => dispatch =>
    spotify
        .get("/me/playlists", oAuthToken)
        .then(r => r.json())
        .then(r => {
            const playlists = r.items.map(i => ({ id: i.id, name: i.name }));
            dispatch(fetchPlaylistsSuccess(playlists));
        })
        .catch(err => dispatch(fetchPlaylistsFail(err)));
