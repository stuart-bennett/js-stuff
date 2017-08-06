// @flow

type Either<E,A> = {
    left: ?E,
    right: ?A,
    hasValue: bool,
    getOrDefault: A => A
};

type SearchResult = {
    title: string
};

type ApiResponse = {
    title: string
};
