import { combineReducers } from 'redux';
import feedback from './feedback';
import login from './login';
import playlists from './playlists';
import search from './search';
import user from './user';

export default combineReducers({
    feedback,
    login,
    playlists,
    search,
    user
});
