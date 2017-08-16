// @flow

import React from 'react'

type Props = {
    items: Array<Playlist>,
    onSelect: Command<Playlist>
};

const emptyView = <p>No playlists!</p>;
const view = (p: Props) => <ul className="list-unstyled">
    { p.items.map((x: Playlist) =>
        <li
            className="selectable playlist-item pt-4 pb-4"
            key={x.id}
            onClick={() => p.onSelect(x)}>{x.name}</li>)
    }
</ul>;

const Playlists = (p: Props) => <div>
    <h1 className="h4 text-uppercase text-center">Your Playlists</h1>
    { p.items.length > 0 ? view(p) : emptyView }
    <button className="btn btn-primary">Add new...</button>
</div>;

export default Playlists;
