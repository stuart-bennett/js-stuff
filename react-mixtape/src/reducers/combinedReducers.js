import { combineReducers } from 'redux'
import { authentication } from 'reducers/authentication'
import { playlists } from 'reducers/playlists'
import { search } from 'reducers/search'

export default combineReducers({
    authentication,
    playlists,
    search
});
