// @flow

import React from 'react'
import {search} from 'spotifyApi'
import SearchResults from 'components/SearchResults'
import {getOrDefault} from 'Either'

type Props = {
    placeholder: string,
    oAuthToken: string
};

type State = {
    searchTerm: string,
    searchResults: Array<SearchResult>
};

class Search extends React.Component<Props, Props, State> {
    static defaultProps = {
        oAuthToken: "",
        placeholder: 'Search...'
    };

    state = {
        searchTerm: 'Testing',
        searchResults: []
    };

    constructor(props: Props) {
        super(props);
    }

    handleChange(input: HTMLInputElement) {
        const searchTerm = input.value;
        this.setState({
            searchTerm: searchTerm
        });

        const fn = (r: Either<string, Array<SearchResult>>) =>
            this.setState({
                searchResults: getOrDefault(r, [])
            });

        search(searchTerm, this.props.oAuthToken).then(fn);
    }

    render() {
        return <div>
                <h1>Search</h1>
                <input
                    type="search"
                    placeholder={this.props.placeholder}
                    className="form-control"
                    onChange={evt => this.handleChange(evt.target)}
                    value={this.state.searchTerm}/>
                <SearchResults results={this.state.searchResults} />
            </div>;

    }
}

export default Search;
