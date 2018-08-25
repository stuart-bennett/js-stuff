import { combineReducers } from 'redux';
import login from './login';
import playlists from './playlists';
import search from './search';
import * as actions from '../actionTypes';
import * as remoteData from '../utils/remoteData';

const initialState = {
    searchResults: remoteData.initial,
    profileImage: 'http://picsum.photos/100/100',
    profileUrl: null,
    numberOfFollowers: null,
};

const root = function reducer(state = initialState, action) {

    switch (action.type) {
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

export default combineReducers({
    root,
    playlists,
    login,
    search
});
