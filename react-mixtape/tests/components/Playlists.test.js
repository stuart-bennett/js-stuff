import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { shallow } from 'enzyme';
import Playlists from 'components/plain/Playlists';

// Provide mock implementation for Fetch API
window.fetch = fetchMock;

describe("Given a Playlists component", () => {
    describe("when items property is empty should render", () => {
        test("should render an 'empty' message", () => {
            const component = shallow(<Playlists items={[]} />);
            const $p = component.find('p');
            expect($p).not.toBeNull();
        });
    });

    describe("when items property is not empty", () => {
        test("should render a list item for each array item", () => {
            const items: Array<Playlist> = [
                { id: "item#1", name: "name#1" },
                { id: "item#2", name: "name#2" },
                { id: "item#3", name: "name#3" },
            ];

            const component = shallow(<Playlists items={items} />);
            const $li = component.find('ul li');
            expect($li).toHaveLength(items.length);
        });
    });
});
