import { combineReducers } from 'redux'
import { authentication } from 'reducers/authentication'
import { users } from 'reducers/users'

export default combineReducers({
    authentication,
    users
});
