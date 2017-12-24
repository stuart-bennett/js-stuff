// @flow

import React from 'react'
import Message from 'components/plain/Message'
import Search from 'components/plain/Search'
import Playlists from 'components/plain/Playlists'
import PlaylistDetail from 'components/plain/PlaylistDetail'
import {getOrDefault} from 'utils/either'
import {newPlaylist} from 'models/playlist'
import {
    getPlaylists,
    getPlaylistTracks
} from 'http/spotifyApi'

import savePlaylist from 'services/playlistService'

type Props = {
    user: User,
    token: string
};

type State = {
    playlists: Array<Playlist>,
    selectedPlaylist: ?Playlist,
    message: ?FeedbackMessage
};

class AuthApp extends React.Component<Props, Props, State> {
    static defaultProps = {
        user: { id: "" },
        token: ""
    };

    state = {
        playlists: [],
        selectedPlaylist: null,
        message: null
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
        const playlist: Playlist = newPlaylist();
        this.setState({
            selectedPlaylist: playlist
        });
    }

    savePlaylist(p: Playlist) {
        const afterTrackUpdate =
            (p: Playlist) => {
                this.setState({
                    selectedPlaylist: p
                });
            };

        // Temporary until add playlist name textbox
        p.name = "untitled";
        const request: SavePlaylistRequest = {
            playlist: p,
            userId: this.props.user.id,
            token: this.props.token
        };

        savePlaylist(request)
            .then(afterTrackUpdate)
            .catch(err => this.showFeedback(err, true));
    }

    showFeedback(messageText: string, isError: bool = false) {
        const message: FeedbackMessage = {
            text: messageText,
            isError: isError
        };

        this.setState({
            message: message
        });
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
            <Message message="kjflkdsjfls" isError={true} />
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
