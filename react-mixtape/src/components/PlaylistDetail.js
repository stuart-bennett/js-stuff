// @flow

import React from 'react'

type Props = {
    playlist: Playlist
};

const playlistImage = (a: Array<Image>) => <img
    src={a.length > 0 ? a[0].url : "" }
    className="mw-100" />

const trackView = (x: PlaylistTrack) => <li key={x.id} className="mt-2 mb-2">
    <div className="media">
        <img src="" className="d-flex mr-3" />
        <div className="media-body">
            <h1 className="h6 mb-0">{x.title}</h1>
            <p className="small">{x.primaryArtist}</p>
        </div>
    </div>
</li>

const PlaylistDetail = (p: Props) => <div className="playlist">
    <div>
        { playlistImage(p.playlist.images) }
        <div className="playlist-title pt-4 pb-4 pl-3 pr-3 mb-4">
            <h2 className="h5 mb-0 text-uppercase">
                { p.playlist.name }
            </h2>
        </div>
        <div className="pl-3 pr-3">
            <button className="btn btn-primary">Save</button>
            <ul className="list-unstyled">
                { p.playlist.tracks.map(x => trackView(x)) }
            </ul>
        </div>
    </div>
</div>;

export default PlaylistDetail;
