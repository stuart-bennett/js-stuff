import {fetchMap} from 'http/apiWrapper';
import {some} from 'utils/either';
import fetchMock from 'jest-fetch-mock';

// Mock the Fetch API
window.fetch = fetchMock;

type SourceType = {
    title: string,
    url: string,
    type: string
};

type DestinationType = {
    mappedTitle: string,
    mappedUrl: string
};

describe("Given an apiWrapper", () => {
    const anyUrl: string = "http://example.org";
    const response: SourceType = {
        title: "title.test",
        url: "url.test",
        type: "type.test"
    };

    test("calling fetchMap should transform result", () => {
        const expected: Either<string, DestinationType> = some({
            mappedTitle: "title.test",
            mappedUrl: "url.test"
        });

        fetchMock.mockResponse(JSON.stringify(response));
        const mapFn: ((a: SourceType) => DestinationType) = a => ({
            mappedTitle: a.title,
            mappedUrl: a.url
        });

        const actual = fetchMap(mapFn, anyUrl);
        expect(actual).resolves.toEqual(expected);
    });
});
