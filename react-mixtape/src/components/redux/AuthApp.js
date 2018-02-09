// @flow

import React from 'react'
import {connect} from 'react-redux'
import Playlists from 'components/redux/Playlists'

type Props = {
    user: User,
    token: string,
    playlists: Array<Playlist>,
    playlistSelected: (p: Playlist) => void,
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
                    <div>{props.user.id}</div>
                </div>
            </div>
            <Playlists
                items={props.playlists}
                onSelect={(p) => props.playlistSelected(p)}
                addNewPlaylist={() => props.addNewPlaylist()} />
        </div>
    </div>;
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists.playlists
    };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
    playlistSelected: (p: Playlist) => dispatch(p)
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthApp);
