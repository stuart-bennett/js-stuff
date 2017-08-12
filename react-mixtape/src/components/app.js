// @flow

import React from 'react'
import Search from 'components/Search'
import Playlists from 'components/Playlists'
import Unauthorised from 'components/Unauthorised'
import {getPlaylists} from 'spotifyApi'
import {getOrDefault} from 'Either'

const clientId = "1f662e1ad1ae494382cd56133ebb7b14";
const getToken = (w: window): ?string =>
    w.location.hash.length > 0 ? w.location.hash.split("=")[1].split("&")[0] : null;

type Anonymous = { isAuthenticated: false };
type OAuth = { isAuthenticated: true, token: string };
type Authentication = OAuth | Anonymous;

type Props = {
};

type State = {
    playlists: Array<Playlist>,
    oAuthToken: Authentication
};

class App extends React.Component<Props, Props, State> {
    static defaultProps = {};
    state = {
        playlists: [],
        oAuthToken: { isAuthenticated: false }
    };

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        const token: ?string = getToken(window);
        const auth = (token != null)
            ? { token: token, isAuthenticated: true }
            : { isAuthenticated: false };

        this.setState({
            oAuthToken: auth
        });

        if (!auth.isAuthenticated) return;
        getPlaylists(auth.token).then(e => this.setState({
            playlists: getOrDefault(e, [])
        }));
    }

    render() {
        if (!this.state.oAuthToken.isAuthenticated)
            return <Unauthorised clientId={clientId} />;

        return <div>
            <Search
                oAuthToken={this.state.oAuthToken.token}
                placeholder="Search..." />
            <Playlists items={this.state.playlists} />
        </div>;
    }
}

export default App;
