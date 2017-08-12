import React from 'react'

type Props = {
    items: Array<Playlist>
};

const emptyView = <p>No playlists</p>;
const view = (p: Props) => <ul>
    { p.items.map((x: Playlist) => <li key={x.id}>{x.name}</li>) }
</ul>;


const Playlists = (p: Props) => <div>
    <h1>Playlists</h1>
    { p.items.length > 0 ? view(p) : emptyView }
</div>;

export default Playlists;
