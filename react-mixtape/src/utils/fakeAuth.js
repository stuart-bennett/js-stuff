/**
 *  Fake Auth Module
 *  Provide some basic authentication-type functionality for testing
 *  hiding of user-specific components
 *  =======
 *  Exports
 *  Don't export the fakeAuth object literal as it's mutable and
 *  would allow any importers the ability to override the isAuth...
 *  property.
 *  Instead, authentication status should be manipulated via the
 *  exported login() function and it can be checked via the
 *  exported isAuthenticated function.
 *
 */
const fakeAuth = {
    isAuthenticated: false,
    userId: null,
    token: null,
    onChangeCallbacks: []
}

const login = (token) => {
    if (!token) {
        fakeAuth.isAuthenticated = false;
        fakeAuth.onChangeCallbacks.forEach(f => f(fakeAuth.isAuthenticated));
        return;
    }

    fakeAuth.isAuthenticated = true;
    fakeAuth.token = token;

    // This should come from token endpoint API response
    // Could do the http call to /me endpoint here?
    fakeAuth.userId = 'test.user';
    fakeAuth.onChangeCallbacks.forEach(f => f(fakeAuth.isAuthenticated));
};

const isAuthenticated = () => fakeAuth.isAuthenticated;
const loggedInUser = () => { fakeAuth.userId };

// Enable clients to register functions to run
// when a login (or eventually logout) occurs
const registerOnChange = (f) => fakeAuth.onChangeCallbacks.push(f);

export {
    registerOnChange,
    login,
    isAuthenticated,
    loggedInUser
};
