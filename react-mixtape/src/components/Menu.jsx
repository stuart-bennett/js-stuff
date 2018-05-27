import PropTypes from 'prop-types';
import React from 'react';
import styles from './menu.css';
import Spinner from './Spinner.jsx';

const Menu = ({ userId }) => {
    if (userId == null) {
        return <Spinner />;
    }

    return (
        <div className={styles.container}>
            Logged in as { userId }
        </div>);
};

Menu.propTypes = {
    userId: PropTypes.string
};

export default Menu;
