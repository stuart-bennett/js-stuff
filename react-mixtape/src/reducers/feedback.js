import * as actions from '../actionTypes';

export const initialState = {
    notifications: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case actions.FEEDBACK_SHOW:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    action.notification
                ]
            };

        case actions.FEEDBACK_HIDE:
            return {
                ...state,
                notifications: state.notifications.filter(n => n.id != action.id)
            };

        default:
            return state;
    }
}
