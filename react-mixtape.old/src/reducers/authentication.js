import { anonymous } from 'models/authentication';
import type { Action } from '../actions';

const DefaultState: Authentication = anonymous();

export function authentication(state: Authentication = DefaultState, action: Action): Authentication {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            return action.auth;
        default:
            return state;
    }
}
