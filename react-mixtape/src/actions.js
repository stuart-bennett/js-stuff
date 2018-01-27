export const USER_AUTHENTICATED: string = "USER_AUTHENTICATED"
type UserAuthenticated = {
    type: string,
    payload: Authentication
}

export type Action = UserAuthenticated;
