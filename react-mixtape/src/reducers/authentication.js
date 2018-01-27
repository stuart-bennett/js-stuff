import type { Action } from 'actions'
import {
    USER_AUTHENTICATED
} from '../actions'

const DefaultState: Authentication = { isAuthenticated: false };

export function authentication(state: Authentication, action: Action): Authentication {
    switch (action.type) {
        case USER_AUTHENTICATED:
            return action.payload;
        default:
            return DefaultState;
    }
}
