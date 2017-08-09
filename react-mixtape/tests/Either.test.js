import { none } from 'Either'

describe("Given no value", () => {
    test("can create an empty value", () => {
        const target = none("error");
        expect(target.hasValue).toEqual(false);
    });
});
