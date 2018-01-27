import type {Action} from 'actions'

const DefaultState: ?User = null;
export function users(state: ?User, action: Action) {
    switch (action.type) {
        default:
            return DefaultState;
    }
}

