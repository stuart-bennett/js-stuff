import React from 'react';
import User from '../components/Menu.jsx';
import store from '../store';

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        return <User userId={this.state.userId} />;
    }
}

export default MenuContainer;
