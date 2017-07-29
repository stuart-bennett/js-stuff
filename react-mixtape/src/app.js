import React from 'react';
import ReactDOM from 'react-dom';

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
class Thing extends React.Component {
    render() {
        return <h1>Testing {this.props.name}</h1>;
    }
}

const instance = <Thing name="test name" />;
ReactDOM.render(instance, $root);
