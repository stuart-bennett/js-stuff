// @flow

function _some<E,A>(a: A): Either<E,A> {
    return {
        right: a,
        hasValue: true
    };
}

function _none<E,A>(e: E): Either<E,A> {
    return {
        left: e,
        hasValue: false,
    };
}

function _getOrDefault<E,A>(e: Either<E,A>, d: A): A {
    if (e.hasValue)
        return e.right;

    return d;
}

// couldn't get flow to let type the function in constant / arrow syntax so had to do this
const getOrDefault = _getOrDefault;
const some = _some;
const none = _none;

export { some, none, getOrDefault };
