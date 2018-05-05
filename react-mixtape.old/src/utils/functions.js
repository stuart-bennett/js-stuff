// @flow

function compose<A,B,C>(fa: (A => B), fb: (B => C)): (A => C) {
    return (a: A): C => fb(fa(a));
}

export { compose };
