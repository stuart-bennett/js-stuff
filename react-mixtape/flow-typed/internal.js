// @flow

type Either<E,A> = {
    left: E | null,
    right: A | null,
    hasValue: bool
};

type SearchResult = {
    title: string
};

type ApiResponse = {
    title: string
};
