// @flow

type Either<E,A> = {
    left: ?E,
    right: ?A
};

type SearchResult = {
    title: string
};

type ApiResponse = {
    title: string
};
