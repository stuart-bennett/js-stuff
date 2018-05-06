import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const $root = document.createElement('div');
document.documentElement.appendChild($root);

ReactDOM.render(
<Router>
    <App />
</Router>, $root);
