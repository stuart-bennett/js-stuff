import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './menu.css';

const Menu = ({ onClick }) => <div className={styles.container}>
    <Icon icon={IconNames.MENU} onClick={onClick} />
</div>;

Menu.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Menu;
