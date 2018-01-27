import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { getCurrentUser } from 'http/spotifyApi'
import { compose } from 'utils/functions';
import store from 'store';
import App from 'components/redux/App';
import { USER_AUTHENTICATED } from 'actions'

const getToken: (w: window) => ?string = compose (
    w => w.location.hash,
    s => s == "" ? null : s.split("=")[1].split("&")[0]);

function gotUser(user, token) {
    store.dispatch({
        type: USER_AUTHENTICATED,
        payload: {
            isAuthenticated: true,
            user: user,
            token: token
        }
    });
}

export function start($root: HTMLElement) {
    let token: ?string = getToken(window);
    if (token) {
        getCurrentUser(token).then(user => gotUser(user, token));
    }

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , $root);
}
