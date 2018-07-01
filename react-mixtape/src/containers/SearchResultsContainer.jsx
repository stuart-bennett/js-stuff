/* eslint-disable no-console */
import React from 'react';
import SearchResults from '../components/SearchResults.jsx';
import RemoteData from '../components/RemoteData.jsx';
import Spinner from '../components/Spinner.jsx';
import store from '../store';

class SearchResultsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        return <RemoteData
            data={this.state.searchResults}
            success={data => <SearchResults
                results={data}
                onSelect={this.searchResultSelected} />}
            fetching={<Spinner />}
            fail={msg => <div>{msg}</div>} />
    }

    searchResultSelected(item) {
        console.log(item);
    }
}

const map = (searchResult) => {
    const artists = searchResult.artists;
    if (!Array.isArray(artists) || artists.length < 1) {
        throw new `There were no artists for track '${searchResult.name} (${searchResult.id})`;
    }

    return {
        id: searchResult.id,
        songTitle: searchResult.songTitle,
        artist: artists[0].name
    };
};

export default SearchResultsContainer;
