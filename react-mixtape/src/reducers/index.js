import { combineReducers } from 'redux';
import playlists from './playlists';
import * as actions from '../actionTypes';
import * as remoteData from '../utils/remoteData';

const initialState = {
    searchResults: remoteData.initial,
    token: null,
    userId: null,
    profileImage: 'http://picsum.photos/100/100',
    profileUrl: null,
    numberOfFollowers: null,
    isAuthenticated: false,
    shouldRedirect: false
};

const root = function reducer(state = initialState, action) {

    switch (action.type) {
        case actions.LOGIN_REDIRECT:
            return {
                ...state,
                shouldRedirect: true
            };
        case actions.LOGIN_NO_TOKEN:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                userId: null,
                shouldRedirect: false
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                shouldRedirect: false
            };
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
        case actions.FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                userId: action.userId,
                profileUrl: action.profileUrl,
                numberOfFollowers: action.numberOfFollowers
            }
        case actions.TOGGLE_MENU:
            return {
                ...state,
                isShowingMenu: !state.isShowingMenu
            }
        default:
            return state;
    }
}

export default combineReducers({ root, playlists });
