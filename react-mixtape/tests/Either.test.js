import { some, none, getOrDefault } from 'Either'

describe("Given the result of the 'none' function", () => {
    const expectedError = {
        message: "test.message",
        code: 500
    };

    const target = none(expectedError);

    test("hasValue should be false", () => {
        expect(target.hasValue).toEqual(false);
    });

    test("should have a 'left' property containing the error", () => {
        expect(target.left).toBe(expectedError);
    });

    test("getOrDefault will return the supplied default value", () => {
        const defaultValue = ["default", "value"];
        expect(getOrDefault(target, defaultValue)).toEqual(defaultValue);
    });
});

describe("Given the result of the 'some' function", () => {
    const expectedResult = {
        headers: { "content-type": "text/html" },
        body: "test.message"
    };

    const target = some(expectedResult);

    test("hasValue should be true", () => {
        expect(target.hasValue).toEqual(true);
    });

    test("should have a 'right' property containing the result", () => {
        expect(target.right).toBe(expectedResult);
    });

    test("getOrDefault can extract the result", () => {
        expect(getOrDefault(target, {})).toEqual(expectedResult);
    });
});


