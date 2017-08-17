// @flow

import React from 'react'
import Search from 'components/Search'
import Playlists from 'components/Playlists'
import Unauthorised from 'components/Unauthorised'
import PlaylistDetail from 'components/PlaylistDetail'
import {getCurrentUser, getPlaylists, getPlaylistTracks} from 'spotifyApi'
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
    oAuthToken: Authentication,
    user: User
};

class App extends React.Component<Props, Props, State> {
    static defaultProps = {};
    state = {
        playlists: [],
        selectedPlaylist: null,
        oAuthToken: { isAuthenticated: false },
        user: { id: "" }
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

        getCurrentUser(auth.token).then(e => this.setState({
            user: getOrDefault(e, { id: "" })
        }));

        getPlaylists(auth.token).then(e => this.setState({
            playlists: getOrDefault(e, [])
        }));
    }

    playlistSelected(a: Playlist) {
        if (!this.state.oAuthToken.isAuthenticated) return;
        const fn = (t: Either<string, Array<PlaylistTrack>>) => {
            a.tracks = getOrDefault(t, []);
            this.setState({
                selectedPlaylist: a
            });
        }

        getPlaylistTracks(
            this.state.user.id,
            a.id,
            this.state.oAuthToken.token).then(fn);
    }

    searchResultSelected(a: SearchResult) {
        if (this.state.selectedPlaylist == null) return;
        const playlist: Playlist = this.state.selectedPlaylist;
        playlist.tracks.push({
            title: a.title
        });

        this.setState({
            selectedPlaylist: playlist
        });
    }

    render() {
        if (!this.state.oAuthToken.isAuthenticated)
            return <Unauthorised clientId={clientId} />;

        return <div className="container-fluid fillHeight">
            <div className="row fillHeight">
                <div className="col-md-2 sidebar">
                    <div className="mt-4 mb-4 text-center">
                        <div>
                            <img src="" className="rounded-circle" />
                            <div>{this.state.user.id}</div>
                        </div>
                    </div>
                    <Playlists
                        items={this.state.playlists}
                        onSelect={(p) => this.playlistSelected(p)} />
                </div>

                <div className="col-md-8 pl-0 pr-0 main">
                    <div className="row">
                        <div className="col-md-12">
                            <Search
                                oAuthToken={this.state.oAuthToken.token}
                                placeholder="Search..." />
                        </div>
                    </div>
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
