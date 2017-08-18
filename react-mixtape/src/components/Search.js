// @flow

import React from 'react'
import {search} from 'spotifyApi'
import SearchResults from 'components/SearchResults'
import {getOrDefault} from 'Either'

type Props = {
    placeholder: string,
    oAuthToken: string,
    onSelect: Command<SearchResult>
};

type State = {
    searchTerm: string,
    searchResults: Array<SearchResult>
};

class Search extends React.Component<Props, Props, State> {
    static defaultProps = {
        oAuthToken: "",
        placeholder: 'Search...',
        onSelect: () => {}
    };

    state = {
        searchTerm: '',
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
            <div className="mb-4 pt-5 pb-5 pt-4 pb-4 searchInput">
                <div className="pl-4 pr-4">
                    <input
                        type="search"
                        placeholder={this.props.placeholder}
                        className="form-control"
                        onChange={evt => this.handleChange(evt.target)}
                        value={this.state.searchTerm}/>
                </div>
            </div>

            <div className="pl-4 pr-4">
                <SearchResults
                    onSelect={this.props.onSelect}
                    results={this.state.searchResults} />
            </div>
        </div>;

    }
}

export default Search;
