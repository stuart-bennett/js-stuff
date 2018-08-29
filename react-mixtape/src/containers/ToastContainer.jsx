/* eslint-disable no-console */
import React from 'react';
import store from '../store';
import ToastList from '../components/ToastList.jsx';

class ToastContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        return <ToastList items={this.state.feedback.notifications} />;
    }
}

export default ToastContainer;
