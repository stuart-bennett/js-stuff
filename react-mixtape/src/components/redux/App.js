// @flow

import React from 'react'
import {connect} from 'react-redux'
import AuthApp from 'components/redux/AuthApp'
import Unauthorised from 'components/redux/Unauthorised'

type Props = {
    auth: Authentication
};

const clientId: string = "1f662e1ad1ae494382cd56133ebb7b14";

const App = (props: Props) => {

    return props.auth.isAuthenticated
        ? <AuthApp
            user={props.auth.user}
            token={props.auth.token} />
        : <Unauthorised clientId={clientId} />
}

function mapStateToProps(state): Props {
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
