import type { Action } from 'actions'
import { combineReducers } from 'redux'
import {
    USER_AUTHENTICATED
} from 'actions'

const DefaultState: string = "";

export function authentication(state: string, action: Action) {
    switch (action.type) {
        case USER_AUTHENTICATED:
            return action.payload;
        default:
            return DefaultState;
    }
}

export default combineReducers({ authentication });
