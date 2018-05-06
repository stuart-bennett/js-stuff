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
    onChangeCallbacks: []
}

const login = () => {
    fakeAuth.isAuthenticated = true;

    // This should come from token endpoint API response
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
