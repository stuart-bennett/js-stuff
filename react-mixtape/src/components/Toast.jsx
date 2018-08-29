import PropTypes from 'prop-types';
import React from 'react';

const Toast = ({ message }) => (
    <div>
        <p>{message}</p>
    </div>
);

Toast.propTypes = {
    message: PropTypes.string.isRequired
};

export default Toast;
