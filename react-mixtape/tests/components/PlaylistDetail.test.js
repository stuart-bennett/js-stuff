import React from 'react';
import {shallow} from 'enzyme';
import PlaylistDetail from 'components/PlaylistDetail';

describe("The PlaylistDetail component", () => {
    test("Should render", () => {
        const playlist: Playlist = {
        };
        const $ = shallow(<PlaylistDetail playlist={playlist} />);
        expect($).not.toBeNull();
    });
});
