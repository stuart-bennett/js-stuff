import PropTypes from 'prop-types';
import React from 'react';
import { isFetching, isFail, hasData } from '../utils/remoteData';


class RemoteData extends React.Component {
    render() {
        if (hasData(this.props.data)) {
            return this.props.success(this.props.data.data);
        }

        if (isFetching(this.props.data)) {
            return this.props.fetching;
        }

        if (isFail(this.props.data)) {
            return this.props.fail(this.props.data.reason);
        }

        return null;
    }
}

RemoteData.propTypes = {
    data: PropTypes.shape({
        state: PropTypes.number.isRequired,
        data: PropTypes.array,
        reason: PropTypes.string
    }).isRequired,
    success: PropTypes.func.isRequired,
    fail: PropTypes.func.isRequired,
    fetching: PropTypes.object.isRequired
};

export default RemoteData;
