import { combineReducers } from 'redux'
import { authentication } from 'reducers/authentication'
import { playlists } from 'reducers/playlists'

export default combineReducers({
    authentication,
    playlists
});
