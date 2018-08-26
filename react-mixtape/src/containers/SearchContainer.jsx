/* eslint-disable no-console */
import React from 'react';
import Search from '../components/Search.jsx';
import store from '../store';
import * as actions from '../actions/search';

const NUM_CHARS_BEFORE_SEARCH_BEGINS = 3;
const KEYPRESS_DELAY_MS = 500; // 0.5 seconds

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
    }

    handleInput(searchTerm) {
        this.setState({ searchTerm });
        if (searchTerm.length >= NUM_CHARS_BEFORE_SEARCH_BEGINS) {
            setTimeout(() => this.doSearch(searchTerm), KEYPRESS_DELAY_MS);
        }
    }

    doSearch(searchTerm) {
        store.dispatch(actions.search(
            searchTerm,
            store.getState().login.token));
    }

    handleOnClear() {
        this.setState({ searchTerm: '' });
        store.dispatch(actions.clearSearch());
    }

    render() {
        return <Search
        searchTerm={this.state.searchTerm}
        onChange={ searchTerm => this.handleInput(searchTerm) }
        onClear={ () => this.handleOnClear() } />;
    }
}

export default SearchContainer;
