import { TOGGLE_MENU } from '../actionTypes';
import reducer from './ui';

const action = type => ({
    type
});

describe("ui reducer", () => {
    describe("the initial action", () => {
        const action = {};
        it("should be showing the menu", () => {
            const state = reducer(undefined, action);
            expect(state).toEqual({isShowingMenu: true});
        });
    });

    describe("when handling TOGGLE_STATE", () => {
        describe("and the menu is open", () => {
            const isShowingMenu = true;
            it("should hide the menu", () => {
                const actual = reducer({ isShowingMenu }, action(TOGGLE_MENU));
                const expected = { isShowingMenu: false };
                expect(actual).toEqual(expected);
            });
        });

        describe("and the menu is closed", () => {
            const isShowingMenu = false;
            it("should show the menu", () => {
                const actual = reducer({ isShowingMenu }, action(TOGGLE_MENU));
                const expected = { isShowingMenu: true };
                expect(actual).toEqual(expected);
            });
        });
    });
});
