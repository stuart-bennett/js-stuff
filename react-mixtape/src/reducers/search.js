import * as actions from '../actionTypes';
import * as remoteData from '../utils/remoteData';

const initialState = {
    searchResults: remoteData.initial
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case actions.SEARCH_FETCHING:
            return {
                ...state,
                searchResults: remoteData.fetching
            }
        case actions.SEARCH_FAIL:
            return {
                ...state,
                searchResults: action.searchResults
            }
        case actions.SEARCH_SUCCESS:
            return {
                ...state,
                searchResults: action.searchResults
            }
        case actions.SEARCH_CLEAR:
            return {
                ...state,
                searchResults: remoteData.initial
            }
        default:
            return state;
    }
}
