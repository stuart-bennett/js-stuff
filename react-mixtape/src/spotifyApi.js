// @flow

import {fetchMap} from 'apiWrapper';

const apiBaseUrl = "https://api.spotify.com/v1";

const search = (searchTerm: string, token: string): Promise<Either<string, Array<SearchResult>>> => fetchMap(
    searchMap,
    `${apiBaseUrl}/search?type=track&q=${searchTerm}`,
    new Headers({ "Authorization": "Bearer " + token }));

const getPlaylists = (token: string): Promise<Either<string, Array<Playlist>>> => fetchMap(
    playlistMap,
    `${apiBaseUrl}/me/playlists`,
    new Headers({ "Authorization": "Bearer " + token }));

const getPlaylistTracks = (userId: string, playlistId: string, token: string): Promise<Either<string, Array<PlaylistTrack>>> =>
    fetchMap(
        playlistTracksMap,
        `${apiBaseUrl}/users/${userId}/playlists/${playlistId}/tracks`,
        new Headers({ "Authorization": "Bearer " + token }));

const getCurrentUser = (token: string): Promise<Either<string, User>> =>
    fetchMap(
        userMap,
        `${apiBaseUrl}/me`,
        new Headers({ "Authorization": "Bearer " + token }));

const userMap = (a: UserResponse => User) => ({
    id: a.id
});


const playlistTracksMap = (a: PlaylistTracksResponse => Array<PlaylistTrack>) => a.items.map(x => ({
        title: x.title
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
    getCurrentUser
};
