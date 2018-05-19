import { LOGIN_REDIRECT, LOGIN_NO_TOKEN, LOGIN_SUCCESS } from '../actionTypes';
import reducer from './login';

const action = (type, data) => ({
    type,
    ...data
});

describe("login reducer", () => {
    const loggedOutState = {
        isAuthenticated: false,
        token: null,
        userId: null,
        shouldRedirect: false
    };

    const loggedInState = {
        isAuthenticated: true,
        token: "test.token",
        userId: "test.userId",
        shouldRedirect: false
    };

    describe("the initial action", () => {
        const action = {};
        it("should be logged out", () => {
            const actual = reducer(undefined, action);
            expect(actual).toEqual(loggedOutState);
        });
    });

    describe("when handling LOGIN_REDIRECT", () => {
        it("should redirect", () => {
            const actual = reducer(loggedOutState, action(LOGIN_REDIRECT));
            const expected = { ...loggedOutState, shouldRedirect: true };
            expect(actual).toEqual(expected);
        });
    });

    describe("when handling LOGIN_NO_TOKEN", () => {
        const result = reducer(loggedInState, action(LOGIN_NO_TOKEN));
        it("should remove authentication", () => expect(result.isAuthenticated).toBe(false));
        it("should remove existing token", () => expect(result.token).toBeNull());
        it("should remove userId", () => expect(result.userId).toBeNull());
    });

    describe("when handling LOGIN_SUCCESS", () => {
        const token = "test.newtoken";
        const userId = "test.newUserId";
        const result = reducer(loggedOutState, action(LOGIN_SUCCESS, { token, userId }));
        it("should authenticate", () => expect(result.isAuthenticated).toBe(true));
        it("should assign the new token", () => expect(result.token).toBe(token));
    });
});
