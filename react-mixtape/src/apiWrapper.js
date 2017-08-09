// @flow

import {some, none} from 'Either'

const fetchMap = <A,B>(url: string, map: ((a: A) => B)): Promise<Either<string, B>> =>
    fetch(url)
        .then(r => r.json())
        .then(r => some(map(r)))
        .catch(err => none(err));

export { fetchMap };
