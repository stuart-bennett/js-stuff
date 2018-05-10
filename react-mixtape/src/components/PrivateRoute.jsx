import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../store';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        if (this.state.isAuthenticated) {
            return <Route {...this.props} />;
        }

        return null;
    }
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default PrivateRoute;
