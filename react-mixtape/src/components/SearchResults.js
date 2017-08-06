import React from 'react'

type Props = {
    results: Array<SearchResult>
};

const emptyView = <p>No Results</p>;
const resultsView = (p: Props) => <ul>
    { p.results.map((x: SearchResult) => <li key={x.title}>{x.title}</li>)}
    </ul>;

const render = (p: Props) => p.results.length == 0
    ? emptyView
    : resultsView(p);

const SearchResults = render;
export default SearchResults;
