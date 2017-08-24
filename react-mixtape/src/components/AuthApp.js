// @flow

import React from 'react'
import Search from 'components/Search'
import Playlists from 'components/Playlists'
import PlaylistDetail from 'components/PlaylistDetail'
import {getOrDefault} from 'Either'
import {
    getPlaylists,
    getPlaylistTracks,
    createPlaylist,
    updatePlaylistTracks
} from 'spotifyApi'

type Props = {
    user: User,
    token: string
};

type State = {
    playlists: Array<Playlist>,
    selectedPlaylist: ?Playlist,
};

class AuthApp extends React.Component<Props, Props, State> {
    static defaultProps = {
        user: { id: "" },
        token: ""
    };

    state = {
        playlists: [],
        selectedPlaylist: null,
    };

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        getPlaylists(this.props.token).then(e => this.setState({
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
        const afterTrackUpdate =
            (e: Either<string, Array<PlaylistTrack>>) => {
                p.tracks = getOrDefault(e, p.tracks);
                this.setState({
                    selectedPlaylist: p
                });
            };

        const token: string = this.props.token;
        const userId: string = this.props.user.id;
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
        const fn = (t: Either<string, Array<PlaylistTrack>>) => {
            selectedPlaylist.tracks = getOrDefault(t, []);
            this.setState({
                selectedPlaylist: selectedPlaylist
            });
        }

        if (selectedPlaylist.id == null) return;
        getPlaylistTracks(
            this.props.user.id,
            selectedPlaylist.id,
            this.props.token).then(fn);
    }

    searchResultSelected(a: SearchResult) {
        if (this.state.selectedPlaylist == null) return;
        const playlist: Playlist = this.state.selectedPlaylist;
        playlist.tracks.push({
            id: a.id,
            title: a.title,
            primaryArtist: a.primaryArtistName,
            images: a.images,
            isNew: true
        });

        this.setState({
            selectedPlaylist: playlist
        });
    }

    render() {
        return <div className="container-fluid fillHeight">
            <div className="row fillHeight">
                <div className="col-md-2 sidebar">
                    <div className="mt-4 mb-4 text-center">
                        <div>
                            <img
                                src="http://fillmurray.com/100/100"
                                className="rounded-circle" />
                            <div>{this.props.user.id}</div>
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
                                oAuthToken={this.props.token}
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

export default AuthApp;
