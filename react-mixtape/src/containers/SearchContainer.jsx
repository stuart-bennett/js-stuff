/* eslint-disable no-console */
import React from 'react';
import Search from '../components/Search.jsx';
import store from '../store';
import * as actions from '../actions/search';

const NUM_CHARS_BEFORE_SEARCH_BEGINS = 3;

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
    }

    handleInput(searchTerm) {
        this.setState({ searchTerm });
        if (searchTerm.length >= NUM_CHARS_BEFORE_SEARCH_BEGINS) {
            store.dispatch(actions.search(
                searchTerm,
                store.getState().token));
        }
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
