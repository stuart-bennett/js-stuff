import * as actions from '../actionTypes';

export const initialState = {
    profileImage: 'http://picsum.photos/100/100',
    profileUrl: null,
    numberOfFollowers: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                userId: action.userId,
                profileImage: action.profileImage,
                profileUrl: action.profileUrl,
                numberOfFollowers: action.numberOfFollowers
            }
        default:
            return state;
    }
}
