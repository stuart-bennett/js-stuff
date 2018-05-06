import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const $root = document.createElement('div');
document.documentElement.appendChild($root);

ReactDOM.render(<App />, $root);
