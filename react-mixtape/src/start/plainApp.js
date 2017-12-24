import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/plain/App';

export function start($root: HTMLElement) {
    ReactDOM.render(<App />, $root);
}
