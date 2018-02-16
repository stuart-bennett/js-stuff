import type { Action } from 'actions';
type SearchState = {
    searchTerm: string,
    searchResults: Array<SearchResult>
}

const InitialState: SearchState = {
    searchTerm: '',
    searchResults: []
};

export function search(state: SearchState = InitialState, action: Action): SearchState {
    switch (action.type) {
        case 'SEARCH_TERM_CHANGED':
            return {
                ...state,
                searchTerm: action.searchTerm,
                searchResults: action.searchResults
            }
        default:
            return state;
    }
}
