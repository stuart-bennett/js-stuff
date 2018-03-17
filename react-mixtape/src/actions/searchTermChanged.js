// @flow

import { search } from 'http/spotifyApi'

export type SearchTermChanged = {
    type: 'SEARCH_TERM_CHANGED',
    searchTerm: string,
    searchResults: Array<SearchResult>
};

export const searchTermChanged =
    (searchTerm: string, searchResults: Array<SearchResult>): SearchTermChanged => ({
        type: 'SEARCH_TERM_CHANGED',
        searchTerm,
        searchResults
    });

export const searchTermChangedAsync = (s: string, a: OAuth) =>
    (dispatch: any) =>
        search(s, a.token).then((res: Either<string, Array<SearchResult>>) => {
            if (!res.hasValue) {
                return;
            }

            dispatch(searchTermChanged(s, res.right));
    });
