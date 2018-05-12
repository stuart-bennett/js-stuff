import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css/normalize.css';

const $root = document.createElement('div');
document.body.appendChild($root);

ReactDOM.render(
<Router>
    <AppContainer />
</Router>, $root);
