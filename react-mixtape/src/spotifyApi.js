// @flow

import {fetchMap} from 'apiWrapper';

const apiBaseUrl = "https://api.spotify.com/v1";

const search = (searchTerm: string, token: string): Promise<Either<string, Array<SearchResult>>> => fetchMap(
    searchMap,
    `${apiBaseUrl}/search?type=track&q=${searchTerm}`,
    new Headers({ "Authorization": "Bearer " + token }));

const searchMap = (a: ApiResponse => Array<SearchResult>) =>
    a.tracks.items.map(x => ({
        id: x.id,
        title: x.name
    }));

export { search };
