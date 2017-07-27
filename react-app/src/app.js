import React from 'react';
import ReactDOM from 'react-dom';

var thing = React.createClass({
    render: function() {
        return <h1>Testing {this.props.name}</h1>;
    }
});

const instance = <thing name="test" />;
ReactDOM.render(instance, document.getElementById('root'));
