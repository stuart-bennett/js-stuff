// @flow

import {some, none} from 'utils/either'

const fetchMap = <A,B>(
    map: (a: A) => B,
    request: Request,
    successStatusCode: number = 200)
    : Promise<Either<string, B>> =>

    fetch(request)
        .then(r => handleResponse(r, successStatusCode))
        .then(r => some(map(r)))
        .catch(err => none(err));

function handleResponse(r: Response, successStatusCode: number) {
    if (r.status == successStatusCode)
    {
        return r.json();
    }

    return Promise.reject();
}

export { fetchMap };
