import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose } from 'utils/functions';
import store from 'store';
import App from 'components/redux/App';
import { userAuthenticatedAsync } from 'actions/userAuthenticated';

const getToken: (w: window) => ?string = compose(
    (w: window) => w.location.hash,
    (s: string) =>
        s == "" ? null : s.split("=")[1].split("&")[0]);

export function start($root: HTMLElement) {
    let token: ?string = getToken(window);
    if (token != null) {
        store.dispatch(userAuthenticatedAsync(token));
    }

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , $root);
}
