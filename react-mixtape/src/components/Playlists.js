import React from 'react'

type Props = {
    items: Array<Playlist>,
    onSelect: (a: Playlist) => void
};

const emptyView = <p>No playlists</p>;
const view = (p: Props) => <ul>
    { p.items.map((x: Playlist) =>
        <li
            key={x.id}
            onClick={() => p.onSelect(x)}>{x.name}</li>)
    }
</ul>;

const Playlists = (p: Props) => <div>
    <h1>Playlists</h1>
    { p.items.length > 0 ? view(p) : emptyView }
</div>;

export default Playlists;
