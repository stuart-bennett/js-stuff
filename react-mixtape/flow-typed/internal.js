// @flow
type Success<A> = {
    right: A,
    hasValue: true
};
type Failure<E> = {
    left: E,
    hasValue: false
};

type Either<E,A> = Success<A> | Failure<E>;

// Models
type SearchResult = {
    id: string,
    title: string,
    images: Array<ImageResponse>,
    albumName: string,
    primaryArtistName: string
};

type Playlist = {
    id: string,
    name: string,
    images: Array<string>
};

// Spotify Responses
type TracksResponse = {
    items: Array<TracksResponse>
};

type ArtistResponse = {
    name: string
};

type AlbumResponse = {
    name: string,
    images: Array<ImageResponse>
};

type TrackResponse = {
    id: string,
    name: string,
    uri: string,
    album: AlbumResponse,
    artists: Array<ArtistResponse>,
    images: Array<ImageResponse>
};

type ImageResponse = {
    url: string,
    width: number,
    height: number
};

type SearchResponse = {
    tracks: TracksResponse
};

type GetPlaylistsResponse = {
    id: string,
    name: string,
    images: Array<string>
};
