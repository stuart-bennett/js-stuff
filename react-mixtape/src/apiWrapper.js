// @flow

import {some, none} from 'Either'

const fetchMap = <A,B>(map: (a: A) => B, request: Request)
    : Promise<Either<string, B>> =>

    fetch(request)
        .then(r => r.json())
        .then(r => some(map(r)))
        .catch(err => none(err));

export { fetchMap };
