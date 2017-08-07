import React from 'react';
import {shallow} from 'enzyme';
import Unauthorised from "components/Unauthorised"

describe("Unauthorised component", () => {
    test("should render", () => {
        const component = shallow(<Unauthorised />);
        expect(component).not.toBeNull();
    });
});
