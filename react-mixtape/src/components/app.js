// @flow

import React from 'react'
import Search from 'components/Search'
import Playlists from 'components/Playlists'
import Unauthorised from 'components/Unauthorised'
import PlaylistDetail from 'components/PlaylistDetail'
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
    selectedPlaylist: ?Playlist,
    oAuthToken: Authentication
};

class App extends React.Component<Props, Props, State> {
    static defaultProps = {};
    state = {
        playlists: [],
        selectedPlaylist: null,
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

    playlistSelected(a: Playlist) {
        this.setState({
            selectedPlaylist: a
        });
    }

    render() {
        if (!this.state.oAuthToken.isAuthenticated)
            return <Unauthorised clientId={clientId} />;

        return <div className="container-fluid fillHeight">
            <div className="row fillHeight">
                <div className="col-md-2 sidebar">
                    <Playlists
                        items={this.state.playlists}
                        onSelect={(p) => this.playlistSelected(p)} />
                </div>

                <div className="col-md-8 pl-0 pr-0 main">
                    <Search
                        oAuthToken={this.state.oAuthToken.token}
                        placeholder="Search..." />
                </div>

                <div className="col-md-2 pl-0 pr-0 sidebar">
                    { this.state.selectedPlaylist
                        ? <PlaylistDetail
                            playlist={this.state.selectedPlaylist} />
                        : <p>Nothing selected</p> }
                </div>
            </div>
        </div>;
    }
}

export default App;
