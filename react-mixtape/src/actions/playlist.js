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
    tracks: tracks.map(t => ({ ...t, isPersisted: true }))
});

const fetchPlaylistTracksFail = err => ({
    type: actions.FETCH_PLAYLIST_TRACKS_FAIL,
    reason: err
});

const mapPlaylistResponse = response => ({
    id: response.id,
    name: response.name,
    numberOfFollowers: response.followers.total,
    numberOfTracks: response.tracks.total,
    image: response.images[0].url,
    url: response.external_urls.spotify,
    isPublic: response.public
});

const mapTrack = t => ({
    id: t.track.id,
    songTitle: t.track.name,
    artist: t.track.artists[0].name,
    uri: t.track.uri
});

export const addTrack = track => ({
    type: actions.PLAYLIST_TRACKS_ADD,
    track: { ...track, isPersisted: false }
});

export const fetchPlaylist = (userId, playlistId, oAuthToken) => dispatch =>
    spotify
        .get(`/users/${userId}/playlists/${playlistId}`, oAuthToken)
        .then(r => r.json())
        .then(r =>
            dispatch(fetchPlaylistSuccess(mapPlaylistResponse(r))))
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
