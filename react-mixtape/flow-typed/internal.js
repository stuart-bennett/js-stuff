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

type Command<A> = (a: A) => void;

// Models
type SearchResult = {
    id: string,
    title: string,
    images: Array<Image>,
    albumName: string,
    primaryArtistName: string
};

type PlaylistTrack = {
    id: string,
    title: string,
    primaryArtist: string
};

type Playlist = {
    id: ?string,
    name: string,
    images: Array<Image>,
    tracks: Array<PlaylistTrack>
};

type User = {
    id: string
};

type Image = {
    url: string,
    width: number,
    height: number
};

// Spotify Responses
type UserResponse = {
    id: string
};

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

type PlaylistTrackResponse = {
    id: string,
    name: string,
    primaryArtist: string
};

type PlaylistTracksResponse = {
    items: Array<PlaylistTrackResponse>
};
