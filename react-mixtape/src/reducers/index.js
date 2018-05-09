import * as actions from '../actionTypes/playlistSelector';

const initialState = { playlists: [] };
export function reducer(state = initialState, action) {

    switch (action.type) {
        case actions.FETCH_PLAYLISTS_SUCCESS:
            return {
                ...state,
               playlists: action.playlists
            }
        default:
            return state;
    }
}
