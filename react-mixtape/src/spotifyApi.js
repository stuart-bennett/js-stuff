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

const playlistMap = (a: GetPlaylistsResponse => Array<Playlist>) =>
    a.items.map(x => ({
        id: x.id,
        name: x.name,
        images: x.images
    }));

const searchMap = (a: SearchResponse => Array<SearchResult>) =>
    a.tracks.items.map(x => ({
        id: x.id,
        title: x.name
    }));

export { search, getPlaylists };
