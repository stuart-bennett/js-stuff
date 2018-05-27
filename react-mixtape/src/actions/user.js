import * as actions from '../actionTypes';
import * as spotify from '../utils/spotifyApi';

const fetchCurrentUserSuccess = response => ({
    type: actions.FETCH_CURRENT_USER_SUCCESS,
    ...mapResponse(response)
});

const fetchCurrentUserFail = err => ({
    type: actions.FETCH_CURRENT_USER_FAIL,
    reason: err
});

const mapResponse = (response) => ({
    userId: response.id,
    profileUrl: response.external_urls.spotify,
    numberOfFollowers: response.followers.total,
    profileImage: response.images && response.images.length > 0
        ? response.images[0].url
        : null
});

export const fetchCurrentUser = oAuthToken => dispatch =>
    spotify
        .get("/me", oAuthToken)
        .then(r => r.json())
        .then(r => dispatch(fetchCurrentUserSuccess(r)))
        .catch(err => dispatch(fetchCurrentUserFail(err)));
