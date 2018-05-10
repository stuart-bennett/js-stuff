/* eslint-disable no-console */
import React from 'react';
import Search from '../components/Search.jsx';
import store from '../store';
import * as actions from '../actions/search';

const handleInput = searchTerm => {
    if (searchTerm.length >=3 ) {
        store.dispatch(actions.search(
            searchTerm,
            store.getState().token));
    }
}

const SearchContainer = () => <Search onChange={handleInput} />

export default SearchContainer;
