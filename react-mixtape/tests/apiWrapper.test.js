import {fetchMap} from 'apiWrapper';
import fetchMock from 'jest-fetch-mock';

// Mock the Fetch API
window.fetch = fetchMock;

type ApiResponse = {
    title: string,
    url: string,
    type: string
};

type SearchResult = {
    title: string,
    url: string
};

describe("Given an apiWrapper", () => {
    const anyUrl = "http://example.org";
    const response: ApiResponse = {
        title: "title.test",
        url: "url.test",
        type: "type.test"
    };

    test("calling fetchMap should transform result", () => {
        const expected: SearchResult = {
            title: "title.test",
            url: "url.test"
        };

        fetchMock.mockResponse(JSON.stringify(response));
        const mapFn: ((a: ApiResponse) => SearchResult) = a => ({
            title: a.title,
            url: a.url
        });

        const actual = fetchMap(anyUrl, mapFn);
        expect(actual).resolves.toEqual(expected);
    });
});
