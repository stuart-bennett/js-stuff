// @flow

// Spotify Responses
export type createPlaylistResponse = {
    id: string,
    images: Array<ImageResponse>
};

export type UserResponse = {
    id: string
};

export type TracksResponse = {
    items: Array<TracksResponse>
};

export type ArtistResponse = {
    name: string
};

export type AlbumResponse = {
    name: string,
    images: Array<ImageResponse>
};

export type TrackResponse = {
    id: string,
    name: string,
    uri: string,
    album: AlbumResponse,
    artists: Array<ArtistResponse>,
    images: Array<ImageResponse>
};

export type ImageResponse = {
    url: string,
    width: number,
    height: number
};

export type Collection<A> = {
    items: Array<A>
};

export type SearchResponse = {
    tracks: Collection<TrackResponse>
};

export type PlaylistResponse = {
    id: string,
    name: string,
    images: Array<Image>
};

export type GetPlaylistsResponse = {
    items: Array<PlaylistResponse>
};

export type PlaylistTrackItemResponse = {
    track: PlaylistTrackResponse
};

export type PlaylistTrackResponse = {
    id: string,
    name: string,
    artists: Array<ArtistResponse>,
    album: AlbumResponse
};

export type PlaylistTracksResponse = {
    items: Array<PlaylistTrackItemResponse>
};
