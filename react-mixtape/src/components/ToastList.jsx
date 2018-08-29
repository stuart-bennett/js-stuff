import PropTypes from 'prop-types';
import React from 'react';
import styles from './toastList.css';
import Toast from './Toast.jsx';

const ToastList = ({ items }) => (
    <ul className={styles.container}>
    { items.map(fb =>
        <li key={fb.id} className={styles.item}>
            <Toast message={fb.message} />
        </li>
    )}
    </ul>
);

ToastList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ToastList;

