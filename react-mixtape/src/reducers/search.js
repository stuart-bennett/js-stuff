import * as actions from '../actionTypes';
import * as remoteData from '../utils/remoteData';

const initialState = {
    results: remoteData.initial
};

export default function search(state = initialState, action) {
    switch (action.type) {
        case actions.SEARCH_FETCHING:
            return {
                ...state,
                results: remoteData.fetching
            }
        case actions.SEARCH_FAIL:
            return {
                ...state,
                results: action.searchResults
            }
        case actions.SEARCH_SUCCESS:
            return {
                ...state,
                results: action.searchResults
            }
        case actions.SEARCH_CLEAR:
            return {
                ...state,
                results: remoteData.initial
            }
        default:
            return state;
    }
}
