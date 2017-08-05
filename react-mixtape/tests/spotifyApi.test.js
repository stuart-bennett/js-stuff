import {search} from 'spotifyApi';
import fetchMock from 'jest-fetch-mock';

describe("The search function", () => {
    window.fetch = fetchMock;
    test("should resolve to an array of strings", () => {
        const result = search(
            "searchTerm",
            () => Promise.resolve([{ title: "fkfjs" }]));

        let expected = [
            "fkfjs"
        ];

        expect(result).resolves.toEqual(expected);
    });
});
