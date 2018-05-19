const NOT_STARTED = 0;
const FETCHING = 1;
const SUCCESS = 2;
const FAILED = 3;

export const isFetching = remoteData => remoteData.state === FETCHING;
export const isFail = remoteData => remoteData.state === FAILED;
export const hasData = remoteData =>
    remoteData.state === SUCCESS && remoteData.data;

export const initial = { state: NOT_STARTED };
export const fetching = { state: FETCHING };
export const success = data => ({ state: SUCCESS, data });
export const fail = msg => ({ state: FAILED, reason: msg });

