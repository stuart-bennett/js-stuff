// @flow

import {maybe} from 'maybe'

const fetchMap = <A,B>(url: string, map: ((a: A) => B)): Promise<Either<string, B>> =>
    fetch(url)
        .then(r => r.json())
        .then(r => maybe.some(map(r)))
        .catch(err => maybe.none(err));

export { fetchMap };
