import * as actions from '../actionTypes';
import * as spotify from '../utils/spotifyApi';

const fetchCurrentUserSuccess = userId => ({
    type: actions.FETCH_CURRENT_USER_SUCCESS,
    userId
});

const fetchCurrentUserFail = err => ({
    type: actions.FETCH_CURRENT_USER_FAIL,
    reason: err
});

export const fetchCurrentUser = oAuthToken => dispatch =>
    spotify
        .get("/me", oAuthToken)
        .then(r => r.json())
        .then(r => dispatch(fetchCurrentUserSuccess(r.id)))
        .catch(err => dispatch(fetchCurrentUserFail(err)));
