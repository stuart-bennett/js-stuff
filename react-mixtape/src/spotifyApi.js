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

function createHeaders(authToken: string) : Headers {
    return new Headers({ "Authorization": "Bearer " + authToken });
}

function search(searchTerm: string, token: string)
    : HttpResult<Array<SearchResult>> {

    const request: Request =
        makeRequest(`search?type=track&q=${searchTerm}`,createHeaders(token));

    return fetchMap(searchMap, request);
}

function getPlaylists(token: string): HttpResult<Array<Playlist>> {
    const request: Request = makeRequest("me/playlists", createHeaders(token));
    return fetchMap(playlistsMap, request);
}

function getPlaylistTracks(
    userId: string,
    playlistId: string,
    token: string): HttpResult<Array<PlaylistTrack>> {

    const request: Request = makeRequest(
        `users/${userId}/playlists/${playlistId}/tracks`,
        new Headers({ "Authorization": "Bearer " + token }));

    return fetchMap(playlistTracksMap, request);
}

function getCurrentUser(token: string): HttpResult<User> {
    const request = makeRequest("me", createHeaders(token));
    return fetchMap(userMap, request);
}

function createPlaylist(
    p: Playlist,
    userId: string,
    token: string): HttpResult<Playlist> {

    const mapFn = r => Object.assign({}, p, {
        id: r.id,
        isNew: false
    });

    const requestBody: string = JSON.stringify({
        name: p.name
    });

    const request: Request = makeRequest(
        `users/${userId}/playlists`,
        createHeaders(token),
        "POST",
        requestBody);

    return fetchMap(mapFn, request, 201);
}

function markTrackAsSaved(track: PlaylistTrack) {
    return Object.assign({}, track, { isNew: false });
}

function updatePlaylistTracks(
    id: string,
    userId: string,
    tracks: Array<PlaylistTrack>,
    token: string): HttpResult<Array<PlaylistTrack>> {

    const mapFn = (): Array<PlaylistTrack> => tracks.map(markTrackAsSaved);
    const newTracks = tracks
        .filter(x => x.isNew)
        .map(x => `spotify:track:${x.id}`);

    const request: Request = makeRequest(
        `users/${userId}/playlists/${id}/tracks`,
        createHeaders(token),
        "POST",
        JSON.stringify(newTracks));

    return fetchMap(mapFn, request);
}

// Maps
function userMap(a: UserResponse): User {
    return { id: a.id };
}

function playlistTracksMap (response: PlaylistTracksResponse)
    : Array<PlaylistTrack> {

    return response.items.map(x => ({
        id: x.track.id,
        title: x.track.name,
        primaryArtist: x.track.artists[0].name,
        images: x.track.album.images,
        isNew: false
    }));
}

function playlistMap(response: PlaylistResponse): Playlist {
    return {
        id: response.id,
        name: response.name,
        images: response.images,
        isNew: false,
        tracks: []
    };
}

function playlistsMap(response: GetPlaylistsResponse): Array<Playlist> {
    return response
        .items
        .map(playlistMap);
}

function searchMap(response: SearchResponse): Array<SearchResult> {
    return response
        .tracks
        .items
        .map(trackResponseToSearchResultMap);
}

function trackResponseToSearchResultMap(response: TrackResponse) {
    return {
        id: response.id,
        title: response.name,
        albumName: response.album.name,
        primaryArtistName: response.artists.length > 0
            ? response.artists[0].name
            : "",
        images: response.album.images
    };
}

export {
    search,
    getPlaylists,
    getPlaylistTracks,
    getCurrentUser,
    createPlaylist,
    updatePlaylistTracks
};
