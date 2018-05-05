// @flow

export type Playlist = {
    id: string,
    name: string,
    images: Array<Image>,
    tracks: Array<PlaylistTrack>,
    isNew: bool
};

export type PlaylistTrack = {
    id: string,
    title: string,
    primaryArtist: string,
    images: Array<Image>,
    isNew: bool
};


