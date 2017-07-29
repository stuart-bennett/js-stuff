import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';

/*
 *  Create and add a container element for the app
 *  @param {object} $mount - The node which should contain the app
 *  @return {object} The app container
 */
function init($mount) {
    const $root = document.createElement('div');
    $mount.appendChild($root);
    return $root;
}

const $root = init(document.body);

ReactDOM.render(<App />, $root);
