import { combineReducers } from 'redux';
import login from './login';
import playlists from './playlists';
import search from './search';
import user from './user';

export default combineReducers({
    login,
    playlists,
    search,
    user
});
