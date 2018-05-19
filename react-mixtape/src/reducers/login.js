import * as actions from '../actionTypes';

const initialState = {
    token: null,
    userId: null,
    isAuthenticated: false,
    shouldRedirect: false
};

export default function(state = initialState, action) {
    switch(action.type) {
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
                userId: null
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                shouldRedirect: false
            };
        default:
            return state;
    }
}
