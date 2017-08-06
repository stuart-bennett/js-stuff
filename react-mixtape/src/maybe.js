// @flow

const maybe = {
    some: <E,A>(a: A): Either<E,A> => ({
        left: null,
        right: a,
        hasValue: true
    }),

    none: <E,A>(e: E): Either<E,A> => ({
        left: e,
        right: null,
        hasValue: false
    })
}

export { maybe };
