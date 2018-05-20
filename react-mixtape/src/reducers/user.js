import * as actions from '../actionTypes';

export const initialState = { userId: null };
export default function(state = initialState, action) {
    switch (action.type) {
       case actions.FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state;
    }
}
