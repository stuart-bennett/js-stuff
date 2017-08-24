import React from 'react';
import {shallow} from 'enzyme';
import Unauthorised from "components/Unauthorised"

describe("Unauthorised component", () => {
    test("should render", () => {
        const clientId = "test.client";
        const expected = `https://accounts.spotify.com/authorize/?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=http://localhost:8080/index.html`;
        const component = shallow(<Unauthorised clientId={clientId} />);
        const $a = component.find("a");
        expect($a.props()).toHaveProperty("href", expected);
    });
});
