import React from 'react';
import {shallow} from 'enzyme';
import PlaylistDetail from 'components/plain/PlaylistDetail';

describe("The PlaylistDetail component", () => {
    test("Should render", () => {
        const playlist: Playlist = {
            images: [],
            tracks: []
        };

        const $ = shallow(<PlaylistDetail playlist={playlist} />);
        expect($).not.toBeNull();
    });
});
