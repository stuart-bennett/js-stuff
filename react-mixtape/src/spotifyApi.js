// @flow

import {fetchMap} from 'apiWrapper';

const apiBaseUrl = "https://api.spotify.com/v1";

const makeRequest = (
    uri: string,
    headers: Headers = new Headers(),
    method: string = "GET"): Request => new Request(uri, {
        headers: headers,
        method: method
    });


const search = (searchTerm: string, token: string): Promise<Either<string, Array<SearchResult>>> => fetchMap(
    searchMap,
    makeRequest(
        `${apiBaseUrl}/search?type=track&q=${searchTerm}`,
        new Headers({ "Authorization": "Bearer " + token })));

const getPlaylists = (token: string): Promise<Either<string, Array<Playlist>>> => fetchMap(
    playlistMap,
    makeRequest(`${apiBaseUrl}/me/playlists`,
    new Headers({ "Authorization": "Bearer " + token })));

const getPlaylistTracks = (
    userId: string,
    playlistId: string,
    token: string): Promise<Either<string, Array<PlaylistTrack>>> =>
    fetchMap(
        playlistTracksMap,
        makeRequest(
            `${apiBaseUrl}/users/${userId}/playlists/${playlistId}/tracks`,
            new Headers({ "Authorization": "Bearer " + token })));

const getCurrentUser = (token: string): Promise<Either<string, User>> =>
    fetchMap(
        userMap,
        makeRequest(
            `${apiBaseUrl}/me`,
            new Headers({ "Authorization": "Bearer " + token })));

const createPlaylist = (p: Playlist, userId: string, token: string): Promise<Either<string, Playlist>> =>
    fetchMap(
        () => p,
        makeRequest(
            `${apiBaseUrl}/users/${userId}/playlists`,
            new Headers({ "Authorization": "Bearer " + token }),
            "POST"));

const updatePlaylistTracks = (
    id: string,
    userId: string,
    tracks: Array<PlaylistTrack>,
    token: string): Promise<Either<string, bool>> =>
    fetchMap(
        () => true,
        makeRequest(
            `${apiBaseUrl}/users/${userId}/playlists/${id}/tracks`,
            new Headers({ "Authorization": "Bearer " + token }),
            "POST"));

// Maps
const userMap = (a: UserResponse => User) => ({
    id: a.id
});

const playlistTracksMap = (a: PlaylistTracksResponse => Array<PlaylistTrack>) => a.items.map(x => ({
        id: x.track.id,
        title: x.track.name,
        primaryArtist: x.track.artists[0].name
    }));

const playlistMap = (a: GetPlaylistsResponse => Array<Playlist>) =>
    a.items.map(x => ({
        id: x.id,
        name: x.name,
        images: x.images
    }));

const searchMap = (a: SearchResponse => Array<SearchResult>) =>
    a.tracks.items.map(x => ({
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
