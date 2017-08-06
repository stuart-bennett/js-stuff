// @flow

type Either<E,A> = {
    left: ?E,
    right: ?A,
    hasValue: bool
};

type SearchResult = {
    title: string
};

type ApiResponse = {
    title: string
};
