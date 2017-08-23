// @flow

import React from 'react'
import Search from 'components/Search'
import Playlists from 'components/Playlists'
import Unauthorised from 'components/Unauthorised'
import PlaylistDetail from 'components/PlaylistDetail'
import {
    getCurrentUser,
    getPlaylists,
    getPlaylistTracks,
    createPlaylist,
    updatePlaylistTracks
} from 'spotifyApi'
import {getOrDefault} from 'Either'

const clientId = "1f662e1ad1ae494382cd56133ebb7b14";
const getToken = (w: window): ?string =>
    w.location.hash.length > 0 ? w.location.hash.split("=")[1].split("&")[0] : null;

type Anonymous = { isAuthenticated: false };
type OAuth = {
    isAuthenticated: true,
    token: string,
    user: User
};

type Authentication = OAuth | Anonymous;
type Props = {};
type State = {
    playlists: Array<Playlist>,
    selectedPlaylist: ?Playlist,
    auth: Authentication,
};

class App extends React.Component<Props, Props, State> {
    static defaultProps = {};
    state = {
        playlists: [],
        selectedPlaylist: null,
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

        getPlaylists(token).then(e => this.setState({
            playlists: getOrDefault(e, [])
        }));
    }

    addNewPlaylist() {
        const playlist: Playlist = {
            id: "",
            name: "Untitled",
            tracks: [],
            images: [],
            isNew: true
        };

        this.setState({
            selectedPlaylist: playlist
        });
    }

    savePlaylist(p: Playlist) {
        const auth = this.state.auth;
        if (!auth.isAuthenticated) return;
        const token: string = auth.token;
        const userId: string = auth.user.id;
        const afterTrackUpdate =
            (e: Either<string, Array<PlaylistTrack>>) => {
                p.tracks = getOrDefault(e, p.tracks);
                this.setState({
                    selectedPlaylist: p
                });
            };

        if (p.isNew) {
            createPlaylist(p, userId, token).then(e => {
                p = getOrDefault(e, p);
                return updatePlaylistTracks(
                    p.id,
                    userId,
                    p.tracks,
                    token);
            }).then(afterTrackUpdate);
        } else {
            updatePlaylistTracks(p.id, userId, p.tracks, token)
                .then(afterTrackUpdate);
        }
    }

    playlistSelected(selectedPlaylist: Playlist) {
        if (!this.state.auth.isAuthenticated) return;
        const fn = (t: Either<string, Array<PlaylistTrack>>) => {
            selectedPlaylist.tracks = getOrDefault(t, []);
            this.setState({
                selectedPlaylist: selectedPlaylist
            });
        }

        const auth = this.state.auth;
        if (selectedPlaylist.id == null) return;
        getPlaylistTracks(
            auth.user.id,
            selectedPlaylist.id,
            auth.token).then(fn);
    }

    searchResultSelected(a: SearchResult) {
        if (this.state.selectedPlaylist == null) return;
        const playlist: Playlist = this.state.selectedPlaylist;
        playlist.tracks.push({
            id: a.id,
            title: a.title,
            primaryArtist: a.primaryArtistName,
            isNew: true
        });

        this.setState({
            selectedPlaylist: playlist
        });
    }

    render() {
        if (!this.state.auth.isAuthenticated)
            return <Unauthorised clientId={clientId} />;

        return <div className="container-fluid fillHeight">
            <div className="row fillHeight">
                <div className="col-md-2 sidebar">
                    <div className="mt-4 mb-4 text-center">
                        <div>
                            <img
                                src="http://fillmurray.com/100/100"
                                className="rounded-circle" />
                            <div>{this.state.auth.user.id}</div>
                        </div>
                    </div>
                    <Playlists
                        items={this.state.playlists}
                        onSelect={(p) => this.playlistSelected(p)}
                        addNewPlaylist={() => this.addNewPlaylist()} />
                </div>

                <div className="col-md-8 pl-0 pr-0 main">
                    <div className="row">
                        <div className="col-md-12">
                            <Search
                                oAuthToken={this.state.auth.token}
                                placeholder="Search..."
                                onSelect={(r) => this.searchResultSelected(r)} />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 pl-0 pr-0 sidebar">
                    { this.state.selectedPlaylist
                        ? <PlaylistDetail
                            playlist={this.state.selectedPlaylist}
                            savePlaylist={p => this.savePlaylist(p)} />
                        : <p>Nothing selected</p> }
                </div>
            </div>
        </div>;
    }
}

export default App;
