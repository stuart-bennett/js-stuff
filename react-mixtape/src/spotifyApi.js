// @flow

import {fetchMap} from 'apiWrapper';

const apiBaseUrl = "https://api.spotify.com";

const search = (searchTerm: string): Promise<Either<string, Array<SearchResult>>> =>
    fetchMap(
        `${apiBaseUrl}/search?type=tracks&q=${searchTerm}`,
        searchMap);

const searchMap = (a: ApiResponse => Array<SearchResult>) => ([{
    title: a.title
}]);

export { search };
