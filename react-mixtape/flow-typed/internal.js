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

type SearchResult = {
    id: String,
    title: String
};

type TracksResponse = {
    items: Array<TracksResponse>
};

type TrackResponse = {
    id: String,
    name: String
};

type ApiResponse = {
    tracks: TracksResponse
};
