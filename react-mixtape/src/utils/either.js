// @flow

function some<E,A>(a: A): Either<E,A> {
    return {
        right: a,
        hasValue: true
    };
}

function none<E,A>(e: E): Either<E,A> {
    return {
        left: e,
        hasValue: false,
    };
}

function getOrDefault<E,A>(e: Either<E,A>, d: A): A {
    if (e.hasValue)
        return e.right;

    return d;
}

export { some, none, getOrDefault };
