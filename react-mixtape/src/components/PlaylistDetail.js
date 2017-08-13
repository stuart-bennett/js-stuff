// @flow

import React from 'react'

type Props = {
    playlist: Playlist
};

const PlaylistDetail = (p: Props) => <div>
    <h1>{ p.playlist.name }</h1>
</div>;

export default PlaylistDetail;
