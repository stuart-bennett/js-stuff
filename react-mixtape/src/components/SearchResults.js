import React from 'react'

type Props = {
    results: Array<string>
};

type State = {
};

class SearchResults extends React.Component<Props, Props, State> {
    static defaultProps = { results: [] };
    state = {};

    render() {
        return <ul>
            { this.props.results.map((x: string) => <li key={x}>{x}</li> )}
        </ul>;
    }
}

export default SearchResults;
