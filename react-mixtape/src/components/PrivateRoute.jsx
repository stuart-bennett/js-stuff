import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as auth from '../utils/auth';

class PrivateRoute extends React.Component {

    componentWillMount() {
        auth.registerOnChange((isAuthenticated) => this.setState({
            isAuthenticated
        }));

        this.setState({
            isAuthenticated: auth.isAuthenticated()
        })
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
