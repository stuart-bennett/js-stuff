import React from 'react'

type Props = {
    placeholder: string
};

class Search extends React.Component {
    props: Props;
    static defaultProps: Props;
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <div>
                <h1>Search</h1>
                <input
                    type="search"
                    placeholder={this.props.placeholder}
                    className="form-control" />
            </div>;

    }
}

export default Search;
