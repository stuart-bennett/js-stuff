// @flow

import React from 'react'

type Props = {
    playlist: Playlist
};

const PlaylistDetail = (p: Props) => <div className="playlist">
    <div>
        <img src="" className="mw-100" />
        <div className="playlist-title pt-4 pb-4 pl-3 pr-3 mb-4">
            <h2 className="h5 mb-0 text-uppercase">
                { p.playlist.name }
            </h2>
        </div>
        <div className="pl-3 pr-3">
            <button className="btn btn-primary">Save</button>
            <ul className="list-unstyled">
                <li className="mt-2 mb-2">
                    <div className="media">
                        <img src="" className="d-flex mr-3" />
                        <div className="media-body">
                            <h1 className="h6 mb-0">track.title</h1>
                            <p className="small">track.primaryArtist</p>
                        </div>
                    </div>
                </li>
                <li className="mt-2 mb-2">
                    <div className="media">
                        <img src="" className="d-flex mr-3" />
                        <div className="media-body">
                            <h1 className="h6 mb-0">track.title</h1>
                            <p className="small">track.primaryArtist</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>;

export default PlaylistDetail;