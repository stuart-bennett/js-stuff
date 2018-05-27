import * as actions from '../actionTypes';
import * as spotify from '../utils/spotifyApi';

const fetchCurrentUserSuccess = ({ userId, profileImage }) => ({
    type: actions.FETCH_CURRENT_USER_SUCCESS,
    userId,
    profileImage
});

const fetchCurrentUserFail = err => ({
    type: actions.FETCH_CURRENT_USER_FAIL,
    reason: err
});

const mapResponse = (response) => ({
    userId: response.id,
    profileImage: response.images && response.images.length > 0
        ? response.images[0].url
        : null
});

export const fetchCurrentUser = oAuthToken => dispatch =>
    spotify
        .get("/me", oAuthToken)
        .then(r => r.json())
        .then(r => dispatch(fetchCurrentUserSuccess(mapResponse(r))))
        .catch(err => dispatch(fetchCurrentUserFail(err)));
