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
type HttpResult<A> = Promise<Either<string, A>>;


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
    primaryArtist: string,
    images: Array<Images>,
    isNew: bool
};

type Playlist = {
    id: string,
    name: string,
    images: Array<Image>,
    tracks: Array<PlaylistTrack>,
    isNew: bool
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
type createPlaylistResponse = {
    id: string,
    images: Array<ImageResponse>
};

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

type Collection<A> = {
    items: Array<A>
};

type SearchResponse = {
    tracks: Collection<TrackResponse>
};

type PlaylistResponse = {
    id: string,
    name: string,
    images: Array<Image>
};

type GetPlaylistsResponse = {
    items: Array<PlaylistResponse>
};

type PlaylistTrackItemResponse = {
    track: PlaylistTrackResponse
};

type PlaylistTrackResponse = {
    id: string,
    name: string,
    artists: Array<ArtistResponse>,
    album: AlbumResponse
};

type PlaylistTracksResponse = {
    items: Array<PlaylistTrackItemResponse>
};

// Requests
type SavePlaylistRequest = {
    playlist: Playlist,
    userId: string,
    token: string
}
