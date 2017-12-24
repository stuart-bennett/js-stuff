import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/redux/App';

export function start($root: HTMLElement) {
    ReactDOM.render(<App />, $root);
}
