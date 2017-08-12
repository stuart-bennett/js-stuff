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
    id: String,
    title: String
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

type TrackResponse = {
    id: String,
    name: String
};

type SearchResponse = {
    tracks: TracksResponse
};

type GetPlaylistsResponse = {
    id: string,
    name: string,
    images: Array<string>
};
