// @flow

import React from 'react'
import {connect} from 'react-redux'
import { playlistSelectedAsync } from 'actions'
import Playlists from 'components/redux/Playlists'
import PlaylistDetail from 'components/plain/PlaylistDetail'

type Props = {
    auth: OAuth,
    playlists: Array<Playlist>,
    selectedPlaylist: Playlist,
    playlistSelected: (p: Playlist, a: OAuth) => void,
    savePlaylist: (p: Playlist) => void,
    addNewPlaylist: () => void
};

const AuthApp = (props: Props) => {

    return <div className="container-fluid fillHeight">
        <div className="col-md-2 sidebar">
            <div className="mt-4 mb-4 text-center">
                <div>
                    <img
                        src="http://fillmurray.com/100/100"
                        className="rounded-circle" />
                    <div>{props.auth.user.id}</div>
                </div>
            </div>
            <Playlists
                items={props.playlists}
                onSelect={(p) => props.playlistSelected(p, props.auth)}
                addNewPlaylist={() => props.addNewPlaylist()} />
        </div>


        <div className="col-md-2 pl-0 pr-0 sidebar">
            { props.selectedPlaylist
                ? <PlaylistDetail
                    playlist={props.selectedPlaylist}
                    savePlaylist={p => props.savePlaylist(p)} />
                : <p>Nothing selected</p> }
        </div>
    </div>;
}

const mapStateToProps = (state) => {
    return {
        auth: state.authentication,
        playlists: state.playlists.playlists,
        selectedPlaylist: state.playlists.selectedPlaylist
    };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
    return {
        playlistSelected: (p: Playlist, a: OAuth) =>
            dispatch(playlistSelectedAsync(a, p))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthApp);
