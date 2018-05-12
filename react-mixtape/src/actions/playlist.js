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

const fetchPlaylistTracksSuccess = tracks => ({
    type: actions.FETCH_PLAYLIST_TRACKS_SUCCESS,
    tracks
});

const fetchPlaylistTracksFail = err => ({
    type: actions.FETCH_PLAYLIST_TRACKS_FAIL,
    reason: err
});

const mapTrack = t => ({
    id: t.track.id,
    songTitle: t.track.name,
    artist: t.track.artists[0].name
});

export const fetchPlaylist = (userId, playlistId, oAuthToken) => dispatch =>
    spotify
        .get(`/users/${userId}/playlists/${playlistId}`, oAuthToken)
        .then(r => r.json())
        .then(r => {
            const playlist = {
                id: r.id,
                name: r.name,
                numberOfFollowers: r.followers.total,
                numberOfTracks: r.tracks.total,
                image: r.images[0].url,
                url: r.external_urls.spotify,
                isPublic: r.public
            };
            dispatch(fetchPlaylistSuccess(playlist));
        })
        .catch(err => dispatch(fetchPlaylistFail(err)));

export const fetchPlaylistTracks = (userId, playlistId, oAuthToken) => dispatch =>
    spotify
        .get(`/users/${userId}/playlists/${playlistId}/tracks`, oAuthToken)
        .then(r => r.json())
        .then(ts => {
            const tracks = ts.items.map(mapTrack);
            dispatch(fetchPlaylistTracksSuccess(tracks));
        })
        .catch(err => dispatch(fetchPlaylistTracksFail(err)));
