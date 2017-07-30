import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Search from 'components/search';

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

});


