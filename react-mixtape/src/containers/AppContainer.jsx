import React from 'react';
import App from '../components/App.jsx';
import store from '../store';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        return <App isShowingMenu={this.state.isShowingMenu} />;
    }
}

export default AppContainer;
