// @flow

import React from 'react';
import { connect } from 'react-redux';
import { searchTermChangedAsync } from 'actions/searchTermChanged';
import SearchResults from 'components/redux/SearchResults';

type Props = {
    auth: OAuth,
    searchTerm: string,
    searchResults: Array<SearchResult>,
    placeholder: string,
    onSelect: Command<SearchResult>,
    searchTermChanged: (s: string, a: OAuth) => void
};

const Search = (props: Props) => {
    return <div>
        <div className="mb-4 pt-5 pb-5 pt-4 pb-4 searchInput">
            <div className="pl-4 pr-4">
                <input
                    type="search"
                    placeholder={props.placeholder}
                    className="form-control"
                    onChange={evt => props.searchTermChanged(evt.target.value, props.auth)}
                    value={props.searchTerm}/>
            </div>
        </div>

        <div className="pl-4 pr-4">
            <SearchResults results={props.searchResults} />
        </div>
    </div>;
};

const mapStateToProps = (state) => ({
    auth: state.authentication,
    searchTerm: state.search.searchTerm,
    searchResults: state.search.searchResults,
    placeholder: "Placeholder"
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
    searchTermChanged: (s: string, a: OAuth) => {
        dispatch(searchTermChangedAsync(s, a));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
