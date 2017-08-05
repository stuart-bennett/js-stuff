// @flow

const fetchMap = <A,B>(url: string, map: ((a: A) => B)): Promise<Either<string, B>> =>
    fetch(url)
        .then(r => r.json())
        .then(r => ({ left: null, right: map(r) }))
        .catch(err => ({ left: err, right: null }));

export { fetchMap };
