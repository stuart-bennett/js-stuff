// @flow

import React from 'react'
import AuthApp from 'components/AuthApp'
import Unauthorised from 'components/Unauthorised'
import {getCurrentUser} from 'http/spotifyApi'
import {getOrDefault} from 'utils/either'
import {compose} from 'utils/functions'

const clientId = "1f662e1ad1ae494382cd56133ebb7b14";
const getToken: (w: window) => ?string = compose (
    w => w.location.hash,
    s => s.split("=")[1].split("&")[0]);

type Anonymous = { isAuthenticated: false };
type OAuth = {
    isAuthenticated: true,
    token: string,
    user: User
};

type Authentication = OAuth | Anonymous;
type Props = {};
type State = { auth: Authentication };

class App extends React.Component<Props, Props, State> {
    static defaultProps = {};
    state = {
        auth: { isAuthenticated: false },
    };

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        const token: ?string = getToken(window);
        if (!token) return;

        getCurrentUser(token).then(e => this.setState({
            auth: {
                isAuthenticated: true,
                user: getOrDefault(e, { id: "" }),
                token: token
            }
        }));
    }

    render() {
        return (this.state.auth.isAuthenticated)
            ? <AuthApp
                user={this.state.auth.user}
                token={this.state.auth.token} />
            : <Unauthorised clientId={clientId} />;
    }
}

export default App;
