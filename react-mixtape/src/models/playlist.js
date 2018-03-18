// @flow

import type { Playlist } from 'models/playlist.types';

const newPlaylist = (): Playlist => ({
    id: "",
    name: "",
    tracks: [],
    images: [],
    isNew: true
});

export { newPlaylist };
