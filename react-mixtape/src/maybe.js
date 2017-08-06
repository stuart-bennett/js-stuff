// @flow

const maybe = {
    some: <E,A>(a: A): Either<E,A> => ({
        left: null,
        right: a,
        hasValue: true,
        getOrDefault: () => a
    }),

    none: <E,A>(e: E): Either<E,A> => ({
        left: e,
        right: null,
        hasValue: false,
        getOrDefault: d => d
    })
}

export { maybe };
