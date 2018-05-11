import * as actions from '../actionTypes';
import * as spotify from '../utils/spotifyApi';

const fetchPlaylistSuccess = data => ({
    type: actions.FETCH_PLAYLIST_SUCCESS,
    playlist: data
});

const fetchPlaylistFail = err => ({
    type: actions.FETCH_PLAYLIST_FAIL,
    reason: err
});

export const fetchPlaylist = (userId, playlistId, oAuthToken) => dispatch =>
    spotify
        .get(`/users/${userId}/playlists/${playlistId}`, oAuthToken)
        .then(r => r.json())
        .then(r => {
            const playlist = {
                id: r.id,
                name: r.name,
                numberOfFollowers: r.followers.total
            };
            dispatch(fetchPlaylistSuccess(playlist));
        })
        .catch(err => dispatch(fetchPlaylistFail(err)));
