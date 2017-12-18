// @flow

import {fetchMap} from 'apiWrapper';

const apiBaseUrl = "https://api.spotify.com/v1";

const makeRequest = (
    uri: string,
    headers: Headers = new Headers(),
    method: string = "GET",
    body: ?string = null): Request => {
        const absoluteUrl = `${apiBaseUrl}/${uri}`;
        return new Request(absoluteUrl, {
            headers: headers,
            method: method,
            body: body
        });
    }

const search = (searchTerm: string, token: string): HttpResult<Array<SearchResult>> => fetchMap(
    searchMap,
    makeRequest(
        `search?type=track&q=${searchTerm}`,
        new Headers({ "Authorization": "Bearer " + token })));

const getPlaylists = (token: string): HttpResult<Array<Playlist>> =>
    fetchMap(
        playlistsMap,
        makeRequest(
            "me/playlists",
            new Headers({ "Authorization": "Bearer " + token })));

const getPlaylistTracks = (
    userId: string,
    playlistId: string,
    token: string): HttpResult<Array<PlaylistTrack>> => {
        const request: Request = makeRequest(
            `users/${userId}/playlists/${playlistId}/tracks`,
            new Headers({ "Authorization": "Bearer " + token }));

        return fetchMap(playlistTracksMap, request);
    }

const getCurrentUser = (token: string): HttpResult<User> =>
    fetchMap(
        userMap,
        makeRequest(
            "me",
            new Headers({ "Authorization": "Bearer " + token })));

const createPlaylist = (
    p: Playlist,
    userId: string,
    token: string): HttpResult<Playlist> => {
        const mapFn = r => Object.assign({}, p, {
            id: r.id,
            isNew: false
        });

        const requestBody: string = JSON.stringify({
            name: p.name
        });

        const request: Request = makeRequest(
            `users/${userId}/playlists`,
            new Headers({ "Authorization": "Bearer " + token }),
            "POST",
            requestBody);

        return fetchMap(mapFn, request, 201);
    };

const updatePlaylistTracks = (
    id: string,
    userId: string,
    tracks: Array<PlaylistTrack>,
    token: string): HttpResult<Array<PlaylistTrack>> => {
        const mapFn = () => tracks.map((r: PlaylistTrack) =>
                Object.assign({}, r, { isNew: false }));

        const newTracks = tracks
            .filter(x => x.isNew)
            .map(x => `spotify:track:${x.id}`);

        const request: Request = makeRequest(
            `users/${userId}/playlists/${id}/tracks`,
            new Headers({ "Authorization": "Bearer " + token }),
            "POST",
            JSON.stringify(newTracks));

        return fetchMap(mapFn, request);
    }

// Maps
const userMap = (a: UserResponse): User => ({
    id: a.id
});

const playlistTracksMap =
    (a: PlaylistTracksResponse): Array<PlaylistTrack> =>
        a.items.map(x => ({
            id: x.track.id,
            title: x.track.name,
            primaryArtist: x.track.artists[0].name,
            images: x.track.album.images,
            isNew: false
        }));

const playlistMap = (a: PlaylistResponse): Playlist => ({
    id: a.id,
    name: a.name,
    images: a.images,
    isNew: false,
    tracks: []
});

const playlistsMap = (a: GetPlaylistsResponse): Array<Playlist> =>
    a.items.map(playlistMap)

const searchMap = (a: SearchResponse): Array<SearchResult> =>
    a.tracks.items.map((x: TrackResponse)  => ({
        id: x.id,
        title: x.name,
        albumName: x.album.name,
        primaryArtistName: x.artists.length > 0
            ? x.artists[0].name
            : "",
        images: x.album.images
    }));

export {
    search,
    getPlaylists,
    getPlaylistTracks,
    getCurrentUser,
    createPlaylist,
    updatePlaylistTracks
};
