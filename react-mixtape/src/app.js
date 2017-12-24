import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/plain/App';

const init = ($mount: HTMLElement) => {
    const $root = document.createElement('div');
    $root.classList.add("fillHeight");
    $mount.appendChild($root);
    return $root;
}

const $body: HTMLElement = (document.body: any);
const $root = init($body);

ReactDOM.render(<App />, $root);
