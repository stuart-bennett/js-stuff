/**
 *  Auth Module
 *  Provide some basic authentication-type functionality for testing
 *  hiding of user-specific components
 *  =======
 *  Exports
 *  Don't export the auth object literal as it's mutable and
 *  would allow any importers the ability to override the isAuth...
 *  property.
 *  Instead, authentication status should be manipulated via the
 *  exported login() function and it can be checked via the
 *  exported isAuthenticated function.
 *
 */
const auth = {
    isAuthenticated: false,
    userId: null,
    token: null,
    onChangeCallbacks: []
}

const login = (token) => {
    if (!token) {
        auth.isAuthenticated = false;
        auth.onChangeCallbacks.forEach(f => f(auth.isAuthenticated));
        return;
    }

    auth.isAuthenticated = true;
    auth.token = token;

    // This should come from token endpoint API response
    // Could do the http call to /me endpoint here?
    auth.userId = 'test.user';
    auth.onChangeCallbacks.forEach(f => f(auth.isAuthenticated));
};

const isAuthenticated = () => auth.isAuthenticated;
const loggedInUser = () => { auth.userId };

// Enable clients to register functions to run
// when a login (or eventually logout) occurs
const registerOnChange = (f) => auth.onChangeCallbacks.push(f);

export {
    registerOnChange,
    login,
    isAuthenticated,
    loggedInUser
};
