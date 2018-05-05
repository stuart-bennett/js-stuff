import React from 'react';
import {shallow} from 'enzyme';
import SearchResults from 'components/plain/SearchResults';

const makeSearchResult = () => ({
    id: "id",
    title: "test",
    images: [ { url: 'http://localhost:8080' } ]
});

describe("SearchResults component", () => {
    test("should render each item from results prop", () => {
        const results = [
            makeSearchResult(),
            makeSearchResult()
        ];

        const component = shallow(<SearchResults results={results} />);
        expect(component.children()).toHaveLength(results.length);
    });
});
