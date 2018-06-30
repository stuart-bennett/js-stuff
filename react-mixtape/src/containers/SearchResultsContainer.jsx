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
            success={data => <SearchResults results={data} />}
            fetching={<Spinner />}
            fail={msg => <div>{msg}</div>} />
    }
}

export default SearchResultsContainer;
