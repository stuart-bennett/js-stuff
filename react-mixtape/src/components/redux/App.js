// @flow

import React from 'react'
import {connect} from 'react-redux'
import AuthApp from 'components/redux/AuthApp'
import Unauthorised from 'components/redux/Unauthorised'

type Props = {
    auth: Authentication
};
type State = {};

const clientId: string = "1f662e1ad1ae494382cd56133ebb7b14";

class App extends React.Component<Props, Props, State> {
    static defaultProps = {
        auth: { isAuthenticated: false },
    };

    state = {};

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return this.props.auth.isAuthenticated
            ? <AuthApp
                user={this.props.auth.user}
                token={this.props.auth.token} />
            : <Unauthorised clientId={clientId} />
    }
}

function mapStateToProps(state): State {
    console.log(state);
    return {
        auth: state.authentication
    };
}

function mapDispatchToProps() {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
