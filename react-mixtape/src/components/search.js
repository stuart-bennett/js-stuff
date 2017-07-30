import React from 'react'

type Props = {
    placeholder: string
};

type State = {
    searchTerm: ?string
}

class Search extends React.Component<Props, Props, State> {
    static defaultProps = { placeholder: 'Search...' };
    state = { searchTerm: 'Testing' };
    constructor(props: Props) {
        super(props);
    }

    handleChange(input: HTMLInputElement) {
        this.setState({
            searchTerm: input.value
        });
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
            </div>;

    }
}

export default Search;
