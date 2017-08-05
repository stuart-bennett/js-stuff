import React from 'react'

type Props = {
    results: Array<SearchResult>
};

type State = {
};

class SearchResults extends React.Component<Props, Props, State> {
    static defaultProps = { results: [] };
    state = {};

    render() {
        return <ul>
            { this.props.results.map((x: SearchResult) => <li key={x.title}>{x.title}</li> )}
        </ul>;
    }
}

export default SearchResults;
