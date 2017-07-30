import React from 'react';
import {shallow} from 'enzyme';
import SearchResults from 'components/SearchResults';

describe("SearchResults component", () => {
    test("should render each item from results prop", () => {
        const prefix = "TestItem";
        const results = [
            `${prefix}#1`,
            `${prefix}#2`,
            `${prefix}#3`,
            `${prefix}#4`
        ];

        const component = shallow(<SearchResults results={results} />);
        expect(component.children()).toHaveLength(results.length);
    });
});
