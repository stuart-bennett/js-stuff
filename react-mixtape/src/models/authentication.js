export const oAuth = (token: string, user: User): OAuth => ({
    isAuthenticated: true,
    token,
    user
});

export const anonymous = (): Anonymous => ({
    isAuthenticated: false
});

