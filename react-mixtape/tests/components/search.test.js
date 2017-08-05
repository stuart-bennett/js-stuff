import fetchMock from 'jest-fetch-mock';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Search from 'components/search';

// Provide mock implementation for Fetch API
window.fetch = fetchMock;

describe("Search Component", () => {
    test('renders correctly', () => {
        const app = renderer.create(<Search />);
        expect(app).not.toBeNull();
    });

    test('accepts a placeholder', () => {
        const expected = "Instruction Phrase";
        const component = shallow(
            <Search placeholder={expected} />)

        const $input = component.find("input");
        expect($input.props()).toHaveProperty(
            "placeholder", expected);
    });

    test('Changing value in input updates search term state', () => {
        const expectedSearchTerm = "Something new";
        const component = shallow(<Search placeholder="test" />);
        const input = component.find("input");
        const evt = {
            target: { value: expectedSearchTerm }
        };

        input.simulate("change", evt);
        expect(component.state()).toHaveProperty(
            "searchTerm", expectedSearchTerm);
    });
});


