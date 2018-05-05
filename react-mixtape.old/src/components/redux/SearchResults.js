// @flow
import type { PlaylistTrack } from 'models/playlist.types';
import React from 'react';
import { connect } from 'react-redux';
import { addTrackToCurrentPlaylist } from 'actions/addTrackToCurrentPlaylist';

type Props = {
    results: Array<SearchResult>,
    onSelect: Command<SearchResult>
};

const listItemView = (f: Command<SearchResult>,  x: SearchResult) =>
<li
    key={x.id}
    className="col-md-3 mb-4"
    onClick={() => f(x)}>

    <div className="card selectable searchResult">
        <img
            src={x.images[0].url}
            className="card-img-top searchResult-image" />
        <div className="card-block">
            <h1 className="h6 mb-0 text-uppercase">{x.title}</h1>
            <ul className="list-unstyled">
                <li className="small">{x.primaryArtistName}</li>
            </ul>
            <p className="small mt-1">{x.albumName}</p>
        </div>
    </div>
</li>

const emptyView = <p>No Results</p>;
const resultsView = (p: Props) => <ul className="list-unstyled row">
    { p.results.map((x: SearchResult) => listItemView(p.onSelect, x) )}
</ul>;

const render = (p: Props) => p.results.length == 0
    ? emptyView
    : resultsView(p);

const SearchResults = render;

const mapStateToProps = (state) => ({
    auth: state.authentication,
    searchTerm: state.search.searchTerm,
    searchResults: state.search.searchResults
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
    onSelect: (s: SearchResult) =>
        dispatch(addTrackToCurrentPlaylist(searchResultToTrack(s)))
});

const searchResultToTrack = (searchResult: SearchResult): PlaylistTrack => ({
    id: searchResult.id,
    title: searchResult.title,
    images: searchResult.images,
    isNew: true,
    primaryArtist: searchResult.primaryArtistName
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
