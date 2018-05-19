import * as actions from '../actionTypes';

const initialState = { isShowingMenu: true };
export default function ui(state = initialState, action) {
    switch(action.type) {
        case actions.TOGGLE_MENU:
            return {
                ...state,
                isShowingMenu: !state.isShowingMenu
            }

        default:
            return state;
    }
}
