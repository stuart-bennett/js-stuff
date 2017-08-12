import React from 'react';
import {shallow} from 'enzyme';
import SearchResults from 'components/SearchResults';

describe("SearchResults component", () => {
    test("should render each item from results prop", () => {
        const results = [
            { id: "id", title: "test" },
            { id: "id", title: "test" },
            { id: "id", title: "test" },
            { id: "id", title: "test" }
        ];

        const component = shallow(<SearchResults results={results} />);
        expect(component.children()).toHaveLength(results.length);
    });
});
