import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';

/*
 *  Create and add a container element for the app
 *  @param {object} $mount - The node which should contain the app
 *  @return {object} The app container
 */
function init($mount: HTMLElement) {
    const $root = document.createElement('div');
    $mount.appendChild($root);
    return $root;
}

const $body: HTMLElement = (document.body: any);
const $root = init($body);

ReactDOM.render(<App />, $root);
