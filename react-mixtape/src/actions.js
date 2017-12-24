export const USER_AUTHENTICATED: string = "USER_AUTHENTICATED"
type UserAuthenticated = {
    type: 'USER',
    payload: string
}

export type Action = UserAuthenticated;
