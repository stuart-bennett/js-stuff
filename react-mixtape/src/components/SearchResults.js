import React from 'react'

type Props = {
    results: Array<SearchResult>
};

const listItemView = (x: SearchResult) =>
<li
    key={x.id}
    className="col-md-3 mb-4">

    <div className="card selectable searchResult">
        <img src="" className="card-img-top searchResult-image" />
        <div className="card-block">
            <h1 className="h6 mb-0 text-uppercase">{x.title}</h1>
            <ul className="list-unstyled">
                <li className="small">artist.name</li>
            </ul>
            <p className="small mt-1">model.album</p>
        </div>
    </div>
</li>

const emptyView = <p>No Results</p>;
const resultsView = (p: Props) => <ul className="list-unstyled row">
    { p.results.map((x: SearchResult) => listItemView(x) )}
</ul>;

const render = (p: Props) => p.results.length == 0
    ? emptyView
    : resultsView(p);

const SearchResults = render;
export default SearchResults;
