import { maybe } from 'maybe'

describe("Given no value", () => {
    test("can create an empty value", () => {
        const target = maybe.none("error");
        expect(target.hasValue).toEqual(false);
    });
});
