// @flow

import {some, none} from 'Either'

const fetchMap = <A,B>(
    map: (a: A) => B,
    url: string,
    headers: Headers = new Headers())
        : Promise<Either<string, B>> =>
        fetch(url, { headers: headers})
            .then(r => r.json())
            .then(r => some(map(r)))
            .catch(err => none(err));

export { fetchMap };
